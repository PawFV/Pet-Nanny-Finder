import dotenv from 'dotenv'
import express from 'express'
import 'module-alias/register'
import initApolloServer from '../apollo/initServer'
import { setDefaultLogger } from '../utils/log/logger'

const config = () => {
  dotenv.config()
  setDefaultLogger()
  return {
    app: express(),
    PORT: process.env.PORT || 3500,
    apolloServer: initApolloServer()
  }
}

export default config
