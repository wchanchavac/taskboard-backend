'use strict'

module.exports = `
    type List {
        id: ID
        name: String
        tasks: [Task]
        # board: Board
    }

    type PageList {
		rows: [List]
		length: Int
		pages: Int
	}

    input CreateList {
        name: String! 
        # tasks: [ID]! 
        boardId: ID! 
    }

    input UpdateList {
        id: ID!
        name: String
        # tasks: [ID]! 
        # boardId: ID! 
    }

    # extend type Query {
		# lists(options: Options = { page: 1 }): PageList
		# lists(options: Options = { page: 1 }): [List]
		# list(id: ID!): List
	# }
	
	extend type Mutation {
		createList(input: CreateList!): List
		updateList(input: UpdateList!): List
		deleteList(input: DeleteInput!): List
	}


`
