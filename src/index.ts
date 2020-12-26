/// <reference types="./global" />
import config from './config/index'
import logServer from './utils/log/logServer'

const { app, PORT, server } = config().dotenv().defaults()

server.applyMiddleware({ app })

app.listen({ port: PORT }, () => logServer(PORT))
