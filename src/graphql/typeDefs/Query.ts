import { gql } from 'apollo-server-express'

export default gql`
  type Query {
    users: [User]
    user(id: ID!): User
    pets: [Pet]
    reviews: [Review!]
    review(id: ID!): Review!
  }
`
