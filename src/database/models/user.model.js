'use strict'

module.exports = (sequelize) => {
	const { Model, DataTypes } = require('sequelize')
	class User extends Model {
		static associate(models) {

				models.User.hasMany(models.Board, {
					constraints: false,
					foreignKey: {
						allowNull:  false 
					},
				})

		}
	}

	User.init(
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
				allowNull: false,
			},
				name: {
					type: DataTypes.STRING,
					allowNull:  false ,
		
				},
				email: {
					type: DataTypes.STRING,
					allowNull:  false ,
		
				},
				password: {
					type: DataTypes.STRING,
					allowNull:  false ,
		
				},
		},
		{
			sequelize,
			modelName: 'user',
			freezeTableName: true,
			paranoid: true,
			defaultScope: {
				attributes: {
					exclude: ['updatedAt', 'deletedAt'],
				},
			},
			scopes: {
			},
			indexes: [
			],
		},
	)

	return User
}
