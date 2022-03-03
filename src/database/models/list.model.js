'use strict'

module.exports = (sequelize) => {
	const { Model, DataTypes } = require('sequelize')
	class List extends Model {
		static associate(models) {

				models.List.hasMany(models.Task, {
					constraints: false,
					foreignKey: {
						allowNull:  false 
					},
				})
				models.List.belongsTo(models.Board, {
					constraints: false,
					foreignKey: {
						allowNull:  false 
					},
				})

		}
	}

	List.init(
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
		},
		{
			sequelize,
			modelName: 'list',
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

	return List
}
