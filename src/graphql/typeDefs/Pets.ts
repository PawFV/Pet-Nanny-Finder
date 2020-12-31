import { gql } from 'apollo-server-express'

export default gql`
  type Pet {
    id: ID!
    ownerId: ID!
    owner: User
    name: String!
    age: Int!
    size: Int!
    type: String!
    description: String!
    image: String!
  }

  input PetInput {
    owner: ID!
    age: Int!
    size: Int!
    type: String!
    description: String!
    image: String!
  }
`
