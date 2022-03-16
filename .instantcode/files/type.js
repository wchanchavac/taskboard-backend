'use strict'

module.exports = `
    type {{Singular}} {
        id: ID
        {{#each attributes}}
        {{#if this.isEnum}}
        {{{this.name}}}: {{../Singular}}{{this.Name}}
        {{else}}
        {{{this.name}}}: {{{this.graphqlType}}}
        {{/if}}
        {{/each}}
        {{#each associations}}
        {{#if this.isPlural}}
        # {{{this.pModel}}}: [{{{this.SModel}}}]
        {{else}}
        {{{this.sModel}}}: {{{this.SModel}}}
        {{/if}}
        {{/each}}
    }

    type Page{{Singular}} {
		rows: [{{Singular}}]
		length: Int
		pages: Int
	}

    input Create{{Singular}} {
        {{#each attributes}}
        {{#if this.isEnum}}
        {{{this.name}}}: {{../Singular}}{{{this.Name}}}{{#if this.required}}! {{/if}}
        {{else}}
        {{{this.name}}}: {{{this.graphqlType}}}{{#if this.required}}! {{/if}}
        {{/if}}
        {{/each}}
        {{#each associations}}
        {{#if this.isPlural}}
        # {{{this.pModel}}}: [ID]{{#if this.required}}! {{/if}}
        {{else}}
        {{{this.sModel}}}Id: ID{{#if this.required}}! {{/if}}
        {{/if}}
        {{/each}}
    }

    input Update{{Singular}} {
        id: ID!
        {{#each attributes}}
        {{#if this.isEnum}}
        {{{this.name}}}: {{../Singular}}{{{this.Name}}}
        {{else}}
        {{{this.name}}}: {{{this.graphqlType}}}
        {{/if}}
        {{/each}}
        {{#each associations}}
        {{#if this.isPlural}}
        # {{{this.pModel}}}: [ID]{{#if this.required}}! {{/if}}
        {{else}}
        {{{this.sModel}}}Id: ID{{#if this.required}}! {{/if}}
        {{/if}}
        {{/each}}
    }

    extend type Query {
		{{plural}}(options: Options = { page: 1 }): Page{{Singular}}
		# {{plural}}(options: Options = { page: 1 }): [{{Singular}}]
		{{singular}}(id: ID!): {{Singular}}
	}
	
	extend type Mutation {
		create{{Singular}}(input: Create{{Singular}}!): {{Singular}}
		update{{Singular}}(input: Update{{Singular}}!): {{Singular}}
		delete{{Singular}}(id: ID!): {{Singular}}
	}

    {{#each enums}}
    enum {{../Singular}}{{this.Name}} {
        {{#each this.values}}
        {{this}}
        {{/each}}
    }
    {{/each}}

`
