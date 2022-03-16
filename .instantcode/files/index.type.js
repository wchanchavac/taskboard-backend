'use strict'

const {
	DateTimeTypeDefinition,
	EmailAddressTypeDefinition,
	BigIntTypeDefinition,
	URLTypeDefinition,
	JSONObjectDefinition,
	JSONDefinition,
	LocalDateTypeDefinition
} = require('graphql-scalars')

const global = require('./global.type')
{{#each data}}
	const {{{this.singular}}} = require('./{{{this.singular}}}.type')
{{/each}}

module.exports = [
	DateTimeTypeDefinition,
	EmailAddressTypeDefinition,
	BigIntTypeDefinition,
	URLTypeDefinition,
	JSONObjectDefinition,
	JSONDefinition,
	LocalDateTypeDefinition,
	global,
	{{#each data}}
		{{{this.singular}}},
	{{/each}}
	
]