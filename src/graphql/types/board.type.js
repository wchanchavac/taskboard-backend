'use strict'

module.exports = `
    type Board {
        id: ID
        name: String
        # user: User
        lists: [List]
    }

    type PageBoard {
		rows: [Board]
		length: Int
		pages: Int
	}

    input CreateBoard {
        name: String! 
        # userId: ID
        # lists: [ID]
    }

    input UpdateBoard {
        id: ID!
        name: String
        # userId: ID
        # lists: [ID]
    }

    extend type Query {
		boards(options: Options = { page: 1 }): PageBoard
		# boards(options: Options = { page: 1 }): [Board]
		board(id: ID!): Board
	}
	
	extend type Mutation {
		createBoard(input: CreateBoard!): Board
		updateBoard(input: UpdateBoard!): Board
		deleteBoard(id: ID!): Board
	}


`
