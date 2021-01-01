import { ApolloServer } from 'apollo-server-express'
import { resolvers, typeDefs } from '../../graphql'

export default new ApolloServer({
  introspection: true,
  playground: true,
  typeDefs,
  resolvers,
  context: ({ req }: { req: any }) => {
    const user = req.user || null
    return { user }
  }
})
