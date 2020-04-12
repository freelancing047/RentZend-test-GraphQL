require('dotenv').config()

const express = require('express')
const { ApolloServer } = require('apollo-server-express')

const { resolvers } = require('./graphql')
const typeDefs = require('./graphql/types/defs')

const port = process.env.SERVER_PORT || 4000

const server = new ApolloServer({
  typeDefs,
  resolvers,
  uploads: true,
})

const app = express()
app.use('/public', express.static(__dirname + '/storage'))
server.applyMiddleware({ app })
app.listen(port, () => console.log(`App listening on port ${port}!`))
