const Sequelize = require('sequelize')
const env = process.env.NODE_ENV || 'development'
const config = require(`./../config/database`)[env]

const { database, username, password } = config;
let sequelize = new Sequelize(database, username, password, config);

{{#each data}}
	const {{{this.Singular}}} = require('./models/{{{this.singular}}}.model')(sequelize)
{{/each}}

const db = {
    {{#each data}}
	{{{this.Singular}}},
    {{/each}}
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
