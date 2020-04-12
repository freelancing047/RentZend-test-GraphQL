const Mutation = require('./Mutation')
const Query = require('./Query')
const User = require('./resolvers/User')

const resolvers = {
    Mutation,
    Query,
    User,
}

module.exports = { resolvers }