'use strict'

module.exports = (sequelize) => {
	const { Model, DataTypes } = require('sequelize')
	class Task extends Model {
		static associate(models) {

				models.Task.belongsTo(models.List, {
					constraints: false,
					foreignKey: {
						allowNull:  false 
					},
				})

		}
	}

	Task.init(
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
				status: {
					type: DataTypes.ENUM,
					allowNull:  true ,
						defaultValue: 'PENDING',
						values : [
								'PENDING',
								'COMPLETE',
						],
		
				},
		},
		{
			sequelize,
			modelName: 'task',
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

	return Task
}
