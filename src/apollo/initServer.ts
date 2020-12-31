import { ApolloServer } from 'apollo-server-express'
import { resolvers, typeDefs } from '../graphql/'

export default () =>
  new ApolloServer({
    introspection: true,
    playground: true,
    typeDefs,
    resolvers
  })
