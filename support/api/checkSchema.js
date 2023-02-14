const Ajv = require('ajv');
const {pet} = require('./schemas');
const jsonSchema = new Ajv();
require('ajv-keywords')(jsonSchema);

const validateSchemaByName = (name, data) => {
  const schemas = {
    pet,
  };
  const validate = jsonSchema.compile(schemas[name]);
  const iThrowError = (errMsg) => {
    throw new Error(errMsg);
  };
  if (!validate) {
    assert.throws(iThrowError('Invalid schema'), Error, 'Invalid schema');
  }
  return validate(data);
};

const validateResponse = async (schema, data) => {
  const validate = jsonSchema.compile(schema);
  return validate(data);
};

module.exports = {
  validateSchemaByName,
  validateResponse,
};
