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
	const user = require('./user.type')
	const board = require('./board.type')
	const list = require('./list.type')
	const task = require('./task.type')

module.exports = [
	DateTimeTypeDefinition,
	EmailAddressTypeDefinition,
	BigIntTypeDefinition,
	URLTypeDefinition,
	JSONObjectDefinition,
	JSONDefinition,
	LocalDateTypeDefinition,
	global,
		user,
		board,
		list,
		task,
	
]
