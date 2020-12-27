import { ApolloServer } from 'apollo-server-express'
import { resolvers, typeDefs } from '../graphql/'

const initApolloServer = () =>
  new ApolloServer({ introspection: true, playground: true, typeDefs, resolvers })

export default initApolloServer
