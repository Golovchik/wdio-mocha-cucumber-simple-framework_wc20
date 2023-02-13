module.exports = {
  type: 'object',
  properties: {
    id: {type: 'integer'},
    category: {
      type: 'object',
      properties: {
        id: {type: 'integer'},
        name: {type: 'string'},
      },
    },
    name: {type: 'string'},
    photoUrls: {type: 'array'},
    tags: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {type: 'integer'},
          name: {type: 'string'},
        },
      },
    },
    status: {type: 'string'},
  },
  allRequired: true,
};
