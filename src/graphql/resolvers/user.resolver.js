'use strict'

const { ApolloError } = require('apollo-server-express')
const { setPagination } = require('./../../helpers/index')
const getSession = require('../../middlewares/getSession')

module.exports = {
    Query: {
        /*
        async users(obj, { options }, { db, req }) {
			const session = await getSession(req)

            options = setPagination(options);
            let { limit } = options;

            let { rows, count: length } = await db.User.findAndCountAll(options)

			const pages = limit > 0 ? Math.ceil(length / limit) : 1

            return {
				rows,
				length,
				pages,
			}
        },
        */
       /*
        async user(obj, { id }, { db, req }) {
			const session = await getSession(req)

			let data = await db.User.findByPk(id)
			if (!data) throw new ApolloError(`User with id: ${id} not found`, 'NOT_FOUND')
			return data
        },
        */
        async me(obj, { id }, { db, req }) {
			const session = await getSession(req)
            const { sub } = session;

			let data = await db.User.findByPk(sub)
			if (!data) throw new ApolloError(`User with id: ${sub} not found`, 'NOT_FOUND')
			return data
        },

    },
    Mutation: {
        /*
        async createUser(obj, { input }, { db, req }) {
			const session = await getSession(req)

			return await db.User.create({ ...input })
        },
        */
        async updateUser(obj, { input }, { db, req }) {
			const session = await getSession(req)
            const { sub } = session;

			// const { id } = input

			let data = await db.User.findByPk(sub)
			if (!data) throw new ApolloError(`User with id: ${sub} not found`, 'NOT_FOUND')
			await data.update(input)
			return data
        },
        /*
        async deleteUser(obj, { id }, { db, req }) {
			const session = await getSession(req)

			let data = await db.User.findByPk(id)
			if (!data) throw new ApolloError(`User with id: ${id} not found`, 'NOT_FOUND')
			await data.destroy()
        }
        */
    },
    User: {
        /*
        async boards(user, { options }, { db, literal }) {
            return await user.getBoards();
        },
        */
    }
}