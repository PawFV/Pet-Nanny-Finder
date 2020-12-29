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
    reviews: Reviews
    location: GeoLocation
    pet: Pet
  }

  type Pet {
    id: ID!
    owner: ID!
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

  type Query {
    users: [User]
    user(id: ID!): User
    pets: [Pet]
    pet(id: ID!): Pet
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User
    createPet(pet: PetInput): Pet
    marica(name: String!): String
  }
`

export default typeDefs
