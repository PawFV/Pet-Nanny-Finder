import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Review {
    id: ID!
    userId: ID!
    text: String
  }
  type Reviews {
    given: [Review]
    received: [Review]
  }

  type User {
    id: ID!
    email: String!
    name: String!
    password: String
    phone: String
    location: String
    reputation: Int
    avatar: String
    reviews: Reviews
  }

  type Query {
    getUsers: [User]
  }
  type Mutation {
    createUser(name: String!, email: String!, password: String!): User
  }
`

export default typeDefs
