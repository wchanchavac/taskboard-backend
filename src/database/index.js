const Sequelize = require('sequelize')
const env = process.env.NODE_ENV || 'development'
const config = require(`./../config/database`)[env]

const { database, username, password } = config;
let sequelize = new Sequelize(database, username, password, config);

	const User = require('./models/user.model')(sequelize)
	const Board = require('./models/board.model')(sequelize)
	const List = require('./models/list.model')(sequelize)
	const Task = require('./models/task.model')(sequelize)

const db = {
	User,
	Board,
	List,
	Task,
	sequelize
}

for (const key in db) {
	if (Object.hasOwnProperty.call(db, key)) {
		const entity = db[key]
		if (entity.associate) {
			entity.associate(db)
		}
	}
}

if (env != 'production') {
	sequelize.sync({
		// force: true,
		// alter: {
		// 	drop: true,
		// },
	})
}

module.exports = db
