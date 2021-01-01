import dotenv from 'dotenv'
import express from 'express'
import 'module-alias/register'
import apolloServer from '../apollo/initServer'
import { setDefaultLogger } from '../utils/log/logger'

const config = () => {
  dotenv.config()
  setDefaultLogger()
  return {
    app: express(),
    PORT: process.env.PORT || 3500,
    apolloServer
  }
}

export default config
