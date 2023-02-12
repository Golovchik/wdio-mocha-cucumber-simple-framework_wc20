const Ajv = require("ajv");
const jsonSchema = new Ajv();
require("ajv-keywords")(jsonSchema);
const { pet } = require("./schemas");
const validateSchemaByName = (name, data) => {
  const schemas = {
    pet,
  };
  const validate = jsonSchema.compile(schemas[name]);
  return validate(data);
};

module.exports = {
  validateSchemaByName,
};
