'use strict'

const { ApolloError } = require('apollo-server-express')
const { setPagination } = require('./../../helpers/index')
const getSession = require('../../middlewares/getSession')

module.exports = {
    Query: {
        async boards(obj, { options }, { db, req }) {
			const session = await getSession(req)

            options = setPagination(options);
            let { limit } = options;

            let { rows, count: length } = await db.Board.scope({ method: ['me', session] }).findAndCountAll(options)

			const pages = limit > 0 ? Math.ceil(length / limit) : 1

            return {
				rows,
				length,
				pages,
			}
        },
        async board(obj, { id }, { db, req }) {
			const session = await getSession(req)

			let data = await db.Board.scope({ method: ['me', session] }).findByPk(id)
			if (!data) throw new ApolloError(`Board with id: ${id} not found`, 'NOT_FOUND')
			return data
        },
    },
    Mutation: {
        async createBoard(obj, { input }, { db, req }) {
			const session = await getSession(req)
            const { sub: userId } = session

			return await db.Board.create({ ...input, userId })
        },
        async updateBoard(obj, { input }, { db, req }) {
			const session = await getSession(req)

			const { id } = input

			let data = await db.Board.scope({ method: ['me', session] }).findByPk(id)
			if (!data) throw new ApolloError(`Board with id: ${id} not found`, 'NOT_FOUND')
			await data.update(input)
			return data
        },
        async deleteBoard(obj, { id }, { db, req }) {
			const session = await getSession(req)

			let data = await db.Board.scope({ method: ['me', session] }).findByPk(id)
			if (!data) throw new ApolloError(`Board with id: ${id} not found`, 'NOT_FOUND')
			await data.destroy()
        }
    },
    Board: {
        /*
        async user(board, { options }, { db, literal }) {
            return await board.getUser();
        },
        */
        async lists(board, { options }, { db, literal }) {
            return await board.getLists();
        },
    }
}