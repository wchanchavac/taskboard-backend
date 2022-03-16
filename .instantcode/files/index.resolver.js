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
{{#each data}}
	const {{{this.singular}}} = require('./{{{this.singular}}}.resolver')
{{/each}}

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
		{{#each data}}
			{{{this.singular}}},
		{{/each}}
	),
)
