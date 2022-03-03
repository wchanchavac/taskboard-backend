'use strict'

module.exports = (sequelize) => {
	const { Model, DataTypes } = require('sequelize')
	class Board extends Model {
		static associate(models) {

			models.Board.belongsTo(models.User, {
				constraints: false,
				foreignKey: {
					allowNull: true
				},
			})
			models.Board.hasMany(models.List, {
				constraints: false,
				foreignKey: {
					allowNull: true
				},
			})

		}
	}

	Board.init(
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
				allowNull: false,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,

			},
		},
		{
			sequelize,
			modelName: 'board',
			freezeTableName: true,
			paranoid: true,
			defaultScope: {
				attributes: {
					exclude: ['updatedAt', 'deletedAt'],
				},
			},
			scopes: {
				me({ sub: userId }) {
					return {
						where: {
							userId
						}
					}
				},
			},
			indexes: [
			],
		},
	)

	return Board
}
