const { gql } = require('apollo-server-express')

module.exports = gql`  
  type User {
    id: ID!
    name: String!
    email: String!
    phone: String!
    address: String!
    zipCode: String!
    file_upload: String
}

type Query {
    users: [User]
}

type Mutation {
    createUser(name: String!, email: String!, phone: String!, address: String!, zipCode: String!, file_upload: Upload): User!
}
`;
