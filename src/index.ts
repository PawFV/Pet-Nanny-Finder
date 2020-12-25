/// <reference types="./global" />
import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { resolvers, typeDefs } from './graphql'

const app = express()

new ApolloServer({ typeDefs, resolvers: resolvers as any }).applyMiddleware({
  app
})

app.listen({ port: 3500 }, () =>
  console.log(`🚀 Server ready at http://localhost:3500/graphql`)
)
