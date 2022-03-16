const { pluralize, singularize, camelize } = require("inflection");

module.exports = async (config) => {
  let dataTypes = {
    hexadecimal: "Hexadecimal",
    string: "String",
    float: "Float",
    boolean: "Boolean",
    integer: "Int",
    uuid: "ID",
    email: "EmailAddress",
    json: "JSON",
    url: "URL",
    enum: "enum",
    date: "Date",
    dateOnly: "LocalDate",
  };

  let mySqlDataTypes = {
    string: "STRING",
    float: "FLOAT",
    boolean: "BOOLEAN",
    integer: "INTEGER",
    uuid: "UUID",
    email: "STRING",
    json: "JSON",
    url: "STRING",
    enum: "ENUM",
    date: "DATE",
    dateOnly: "DATEONLY",
  };

  for (let i = 0; i < config.model.data.length; i++) {
    config.model.data[i].enums = [];
    const attributes = config.model.data[i].attributes || [];
    for (let ii = 0; ii < attributes.length; ii++) {
      let a = attributes[ii];
      console.log(JSON.stringify(a, null, 2));
      // try {?

      a.Name = camelize(`${a.name}`);
      a.name = camelize(`${a.name}`, true);
      a.type = camelize(a.type, true);
      a.isDefault = a.defaultValue ? true : false;
      a.isEnum = Array.isArray(a.values);

      // } catch (error) {
      // 	console.log(error);
      // }
      if (a.type === "enum" && a.isEnum) {
        config.model.data[i].enums.push(a);
      }

      if (dataTypes.hasOwnProperty(a.type)) {
        attributes[ii].graphqlType = dataTypes[a.type];
      } else {
        attributes[ii].graphqlType = "String";
      }

      if (mySqlDataTypes.hasOwnProperty(a.type)) {
        attributes[ii].dataType = mySqlDataTypes[a.type];
      } else {
        attributes[ii].dataType = "STRING";
      }
    }

    const associations = config.model.data[i].associations || [];
    for (let ii = 0; ii < associations.length; ii++) {
      let a = associations[ii];
      a.model = camelize(singularize(a.model));
      a.pModel = camelize(pluralize(a.model), true);
      a.sModel = camelize(a.model, true);
      a.PModel = camelize(pluralize(a.model));
      a.SModel = camelize(a.model);
      a.isManyToMany = ["belongsToMany"].includes(a.type);
      a.isIntermediateModel = !a.intermediateModel ? false : true;
      a.isPlural = !["belongsTo", "hasOne"].includes(a.type);
      a.isSingular = ["belongsTo", "hasOne"].includes(a.type);
    }
  }

  return config;
};
