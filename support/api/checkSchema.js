const Ajv = require('ajv');
const jsonSchema = new Ajv();
require('ajv-keywords')(jsonSchema);

const validateResponse = async (schema, data) => {
  const validate = jsonSchema.compile(schema);
  return validate(data);
};

module.exports = {
  validateResponse,
};
