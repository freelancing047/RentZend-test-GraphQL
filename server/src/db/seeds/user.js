const uuid = require('uuid')

async function clear(knex) {
  await knex('user').del()
}

async function seed(knex) {
  await clear(knex)

  const userId = uuid()

  await knex('user').insert({
    id: userId,
    name: 'Test User',
    email: 'user@user.com',
    phone: '111111',
    address: 'String!',
    zipCode: '5345'
  })
}

module.exports = { clear, seed }