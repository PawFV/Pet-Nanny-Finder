import config from './config/index'
import logServer from './utils/log/logServer'

const { app, PORT, apolloServer } = config()
apolloServer.applyMiddleware({ app })

app.listen({ port: PORT }, () => logServer(PORT))
