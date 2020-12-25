import users from '../../mocks/users'

const resolvers: GraphQL.Resolvers = {
  Query: {
    getUsers: () => users
  },
  Mutation: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    createUser: (_, { name, email, password }, __) => {
      const user: User = {
        id: '123',
        name,
        email,
        password
      }
      return user
    }
  }
}

export default resolvers
