'use strict'

const { ApolloError } = require('apollo-server-express')
const { setPagination } = require('./../../helpers/index')
const getSession = require('../../middlewares/getSession')

module.exports = {
    Query: {
        /*
        async tasks(obj, { options }, { db, req }) {
			const session = await getSession(req)

            options = setPagination(options);
            let { limit } = options;

            let { rows, count: length } = await db.Task.findAndCountAll(options)

			const pages = limit > 0 ? Math.ceil(length / limit) : 1

            return {
				rows,
				length,
				pages,
			}
        },
        async task(obj, { id }, { db, req }) {
			const session = await getSession(req)

			let data = await db.Task.findByPk(id)
			if (!data) throw new ApolloError(`Task with id: ${id} not found`, 'NOT_FOUND')
			return data
        },
        */
    },
    Mutation: {
        async createTask(obj, { input }, { db, req }) {
			const session = await getSession(req)

			return await db.Task.create({ ...input })
        },
        async updateTask(obj, { input }, { db, req }) {
			const session = await getSession(req)

			const { id } = input

			let data = await db.Task.findByPk(id)
			if (!data) throw new ApolloError(`Task with id: ${id} not found`, 'NOT_FOUND')
			await data.update(input)
			return data
        },
        async deleteTask(obj, { input }, { db, req }) {
			const session = await getSession(req)

			let data = await db.Task.findByPk(input.id)
			if (!data) throw new ApolloError(`Task with id: ${input.id} not found`, 'NOT_FOUND')
			await data.destroy()
            return data;
        }
    },
    Task: {
        /*
        async list(task, { options }, { db, literal }) {
            return await task.getList();
        },
        */
    }
}