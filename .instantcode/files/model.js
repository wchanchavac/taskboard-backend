'use strict'

module.exports = (sequelize) => {
	const { Model, DataTypes } = require('sequelize')
	class {{Singular}} extends Model {
		static associate(models) {

			{{#each associations}}
				models.{{../Singular}}.{{this.type}}(models.{{this.SModel}}, {
					constraints: false,
					foreignKey: {
						allowNull: {{#if this.required}} false {{else}} true {{/if}},
						{{#if this.isManyToMany}}
						{{#if this.isIntermediateModel}}
						name: "{{../singular}}Id",
						{{/if}}
						{{/if}}
					},
					{{#if this.isManyToMany}}
						{{#if this.isIntermediateModel}}
						through: { model: models.{{this.intermediateModel}}, unique: false },
						{{else}}
						through: '{{{../singular}}}_{{{this.sModel}}}',
						{{/if}}
					{{/if}}
				})
			{{/each}}

		}
	}

	{{Singular}}.init(
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
				allowNull: false,
			},
			{{#if scope}}
			{{/if}}
			{{#each attributes}}
				{{{this.name}}}: {
					type: DataTypes.{{{this.dataType}}},
					allowNull: {{#if this.required}} false {{else}} true {{/if}},
					{{#if this.isDefault}}
						defaultValue: {{{this.defaultValue}}},
					{{/if}}
					{{#if this.isEnum}} 
						values : [
							{{#each this.values}}
								'{{{this}}}',
							{{/each}}
						],
					{{/if}}
		
				},
			{{/each}}
		},
		{
			sequelize,
			modelName: '{{singular}}',
			freezeTableName: true,
			paranoid: true,
			defaultScope: {
				attributes: {
					exclude: ['updatedAt', 'deletedAt'],
				},
			},
			scopes: {
				{{#if scope}} 
				{{/if}}
			},
			indexes: [
				{{#if scope}} 
				{{/if}}
				{{#each associations}}
					{{#if isSingular}}
					{{/if}}
				{{/each}}
			],
		},
	)

	return {{Singular}}
}
