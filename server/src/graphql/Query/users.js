const knex = require('../../db/knex')

const users = () => knex('user')

module.exports = users