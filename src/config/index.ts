import dotenv from 'dotenv'
import express from 'express'
import 'module-alias/register'
import initApolloServer from '../apollo/initServer'

const configs = {
  dotenv: () => {
    dotenv.config()
    return config()
  },
  defaults: () => {
    return {
      app: express(),
      PORT: process.env.PORT || 3500,
      server: initApolloServer()
    }
  }
}

const config = () => configs

export default config
