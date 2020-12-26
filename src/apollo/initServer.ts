import { resolvers, typeDefs } from '@/graphql'
import { ApolloServer } from 'apollo-server-express'

const initApolloServer = () => new ApolloServer({ typeDefs, resolvers })

export default initApolloServer
