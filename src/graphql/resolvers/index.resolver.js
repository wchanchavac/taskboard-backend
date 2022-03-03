'use strict'

const { merge } = require('lodash')

const {
	DateTimeResolver,
	EmailAddressResolver,
	URLResolver,
	JSONObjectResolver,
	BigIntResolver,
	JSONResolver,
	LocalDateResolver
} = require('graphql-scalars')

const global = require('./global.resolver')
	const user = require('./user.resolver')
	const board = require('./board.resolver')
	const list = require('./list.resolver')
	const task = require('./task.resolver')

module.exports = Object.assign(
	{},
	merge(
		{
			DateTime: DateTimeResolver,
			EmailAddress: EmailAddressResolver,
			BigInt: BigIntResolver,
			URL: URLResolver,
			JSONObject: JSONObjectResolver,
			JSON: JSONResolver,
			LocalDate: LocalDateResolver
		},
		global,
			user,
			board,
			list,
			task,
	),
)
