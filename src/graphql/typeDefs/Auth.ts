import { gql } from 'apollo-server-express'

export default gql`
  type Query {
    login(email: String!, password: String!): User
  }

  type Mutation {
    register(input: RegisterInput!): User
  }

  input RegisterInput {
    email: String!
    username: String!
    password: String!
    password2: String!
  }
`
