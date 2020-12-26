import users from '@/mocks/users'
import { MutationResolvers, QueryResolvers } from '@/utils/codegen/graphql'

const Query: QueryResolvers = {
  getUsers: () => users,
  getUser: (_, { id }) => users.find(user => user.id === id)
}

const Mutation: MutationResolvers = {
  createUser: (_, { name, email, password }) => {
    return {
      id: '123',
      name,
      email,
      password
    }
  }
}

const resolvers = {
  Query,
  Mutation
}

export default resolvers
