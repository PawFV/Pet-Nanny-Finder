import resolvers from './resolvers'
import Mutation from './typeDefs/Mutation'
import Pets from './typeDefs/Pets'
import Query from './typeDefs/Query'
import Reviews from './typeDefs/Reviews'
import Users from './typeDefs/Users'

const typeDefs = [Query, Mutation, Users, Reviews, Pets]

export { typeDefs, resolvers }
