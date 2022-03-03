'use strict'

module.exports = `
    type User {
        id: ID
        name: String
        email: EmailAddress
        password: String
        # boards: [Board]
    }

    type PageUser {
		rows: [User]
		length: Int
		pages: Int
	}

    input CreateUser {
        name: String! 
        email: EmailAddress! 
        password: String! 
        # boards: [ID]! 
    }

    input UpdateUser {
        # id: ID!
        name: String
        email: EmailAddress
        password: String
        # boards: [ID]! 
    }

    extend type Query {
		# users(options: Options = { page: 1 }): PageUser
		# users(options: Options = { page: 1 }): [User]
		# user(id: ID!): User
		me: User
	}
	
	extend type Mutation {
		# createUser(input: CreateUser!): User
		updateUser(input: UpdateUser!): User
		# deleteUser(id: ID!): User
	}


`
