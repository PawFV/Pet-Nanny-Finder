import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Destinies {
    from: User
    to: User
  }

  type Review {
    id: ID!
    from: ID!
    to: ID!
    users: Destinies
    text: String
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
    givenReviews: [Review!]
    receivedReviews: [Review!]
    pet: [Pet!]
    location: GeoLocation
  }

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

  type Query {
    users: [User]
    user(id: ID!): User
    pets: [Pet]
    reviews: [Review!]
    review(id: ID!): Review!
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User
    createPet(pet: PetInput): Pet
  }
`

export default typeDefs
