import { MutationResolvers, QueryResolvers, Resolvers } from '@/utils/codegen/graphql'
import users from '../../database/users.json'

const Query: QueryResolvers = {
  users: () => users,
  user: (_, { id }) => {
    const user = users.find(u => u.id === id)
    return user
  }
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
  createPet: (_, { pet }) => {
    return {
      id: '11111',
      ...pet
    }
  }
}

const resolvers: Resolvers = {
  Query,
  Mutation
}

export default resolvers
