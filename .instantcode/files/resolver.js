'use strict'

const { ApolloError } = require('apollo-server-express')
const { setPagination } = require('./../../helpers/index')
const getSession = require('../../middlewares/getSession')

module.exports = {
    Query: {
        async {{plural}}(obj, { options }, { db, req }) {
			const session = await getSession(req)

            options = setPagination(options);
            let { limit } = options;

            let { rows, count: length } = await db.{{Singular}}.findAndCountAll(options)

			const pages = limit > 0 ? Math.ceil(length / limit) : 1

            return {
				rows,
				length,
				pages,
			}
        },
        async {{singular}}(obj, { id }, { db, req }) {
			const session = await getSession(req)

			let data = await db.{{Singular}}.findByPk(id)
			if (!data) throw new ApolloError(`{{Singular}} with id: ${id} not found`, 'NOT_FOUND')
			return data
        },
    },
    Mutation: {
        async create{{Singular}}(obj, { input }, { db, req }) {
			const session = await getSession(req)

			return await db.{{Singular}}.create({ ...input })
        },
        async update{{Singular}}(obj, { input }, { db, req }) {
			const session = await getSession(req)

			const { id } = input

			let data = await db.{{Singular}}.findByPk(id)
			if (!data) throw new ApolloError(`{{Singular}} with id: ${id} not found`, 'NOT_FOUND')
			await data.update(input)
			return data
        },
        async delete{{Singular}}(obj, { id }, { db, req }) {
			const session = await getSession(req)

			let data = await db.{{Singular}}.findByPk(id)
			if (!data) throw new ApolloError(`{{Singular}} with id: ${id} not found`, 'NOT_FOUND')
			await data.destroy()
        }
    },
    {{Singular}}: {
        {{#each associations}}
        {{#if this.isPlural}}
        /*
        async {{{this.pModel}}}({{../singular}}, { options }, { db, literal }) {
            return await {{../singular}}.get{{{this.PModel}}}();
        },
        */
        {{else}}
        async {{{this.sModel}}}({{../singular}}, { options }, { db, literal }) {
            return await {{../singular}}.get{{{this.SModel}}}();
        },
        {{/if}}
        {{/each}}
    }
}