const depthLimit = require('graphql-depth-limit')
const resolvers = require('./src/graphql/resolvers/index.resolver')
const typeDefs = require('./src/graphql/types/index.type')
const db = require('./src/database/index')

const { ApolloServer } = require('apollo-server-express')
const {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageGraphQLPlayground
} = require('apollo-server-core')
const express = require('express')
const http = require('http')

async function startApolloServer (typeDefs, resolvers) {
  const app = express()
  const httpServer = http.createServer(app)
  const server = new ApolloServer({
    context: async ({ req }) => {
      const literal = db.sequelize.literal
      const query = db.sequelize.query
      return {
        db,
        req,
        literal,
        query
      }
    },
    typeDefs,
    resolvers,
    introspection: true,
    debug: true,
    validationRules: [depthLimit(7)],
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer }), ApolloServerPluginLandingPageGraphQLPlayground()]
  })
  await server.start()
  server.applyMiddleware({ app, path: '/' })
  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve))
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
}

startApolloServer(typeDefs, resolvers)
