import { MutationResolvers, QueryResolvers, Resolvers } from '@/utils/codegen/graphql'
import pets from '../../database/pets.json'
import users from '../../database/users.json'

const Query: QueryResolvers = {
  users: () => users,
  user: (_, { id }) => {
    const user = users.find(u => u.id === id)
    return user
  },
  pet: (_, { id }) => pets.find(pet => pet.id === id),
  pets: () => pets
}

const Mutation: MutationResolvers = {
  createUser: (_, { name, email, password }) => {
    return {
      id: '123',
      name,
      email,
      password,
      reviews: {}
    }
  },
  createPet: (_, { pet }) => pets[0]
}

const resolvers: Resolvers = {
  Query,
  Mutation
}

export default resolvers
