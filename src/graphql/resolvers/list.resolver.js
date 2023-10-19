'use strict'

const { ApolloError } = require('apollo-server-express')
const { setPagination } = require('./../../helpers/index')
const getSession = require('../../middlewares/getSession')

module.exports = {
    Query: {
        /*
        async lists(obj, { options }, { db, req }) {
			const session = await getSession(req)

            options = setPagination(options);
            let { limit } = options;

            let { rows, count: length } = await db.List.findAndCountAll(options)

			const pages = limit > 0 ? Math.ceil(length / limit) : 1

            return {
				rows,
				length,
				pages,
			}
        },
        async list(obj, { id }, { db, req }) {
			const session = await getSession(req)

			let data = await db.List.findByPk(id)
			if (!data) throw new ApolloError(`List with id: ${id} not found`, 'NOT_FOUND')
			return data
        },
        */
    },
    Mutation: {
        async createList(obj, { input }, { db, req }) {
			const session = await getSession(req)

			return await db.List.create({ ...input })
        },
        async updateList(obj, { input }, { db, req }) {
			const session = await getSession(req)

			const { id } = input

			let data = await db.List.findByPk(id)
			if (!data) throw new ApolloError(`List with id: ${id} not found`, 'NOT_FOUND')
			await data.update(input)
			return data
        },
        async deleteList(obj, { input }, { db, req }) {
			const session = await getSession(req)

			let data = await db.List.findByPk(input.id)
			if (!data) throw new ApolloError(`List with id: ${input.id} not found`, 'NOT_FOUND')
			await data.destroy()
        }
    },
    List: {
        async tasks(list, { options }, { db, literal }) {
            return await list.getTasks();
        },
        /*
        async board(list, { options }, { db, literal }) {
            return await list.getBoard();
        },
        */
    }
}