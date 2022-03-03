'use strict'

module.exports = `
    type Task {
        id: ID
        name: String
        status: TaskStatus
        # list: List
    }

    type PageTask {
		rows: [Task]
		length: Int
		pages: Int
	}

    input CreateTask {
        name: String! 
        status: TaskStatus
        listId: ID! 
    }

    input UpdateTask {
        id: ID!
        name: String
        status: TaskStatus
        listId: ID
    }

    # extend type Query {
		# tasks(options: Options = { page: 1 }): PageTask
		# tasks(options: Options = { page: 1 }): [Task]
		# task(id: ID!): Task
	# }
	
	extend type Mutation {
		createTask(input: CreateTask!): Task
		updateTask(input: UpdateTask!): Task
		deleteTask(id: ID!): Task
	}

    enum TaskStatus {
        PENDING
        COMPLETE
    }

`
