import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Review {
    id: ID!
    from: ID!
    to: ID!
    text: String
  }
  type Reviews {
    given: [Review!]
    received: [Review!]
  }
  type GeoLocation {
    latitude: String
    longitud: String
  }
  type User {
    id: ID!
    email: String!
    name: String!
    password: String
    phone: String
    reputation: Int
    avatar: String
    reviews: Reviews!
    location: GeoLocation
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User
  }
`

export default typeDefs
