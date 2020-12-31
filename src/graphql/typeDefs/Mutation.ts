import { gql } from 'apollo-server-express'

export default gql`
  type Mutation {
    createUser(name: String!, email: String!, password: String!): User
    createPet(pet: PetInput): Pet
  }
`
