import { ApolloServer } from 'apollo-server-express'
import { resolvers, typeDefs } from '../graphql/'

export default new ApolloServer({
  introspection: true,
  playground: true,
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // @ts-ignore TODO: extend request types to allow user.
    const { user } = req

    return { user }
  }
})
