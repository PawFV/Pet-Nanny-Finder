import { MutationResolvers, QueryResolvers, Resolvers } from '@/utils/codegen/graphql'
import petMutation from './pets/petMutations'
import petQuery from './pets/petQueries'
import petResolvers from './pets/petResolvers'
import reviewsMutation from './reviews/reviewsMutations'
import reviewsQuery from './reviews/reviewsQueries'
import reviewsResolvers from './reviews/reviewsResolvers'
import userMutation from './users/userMutations'
import userQuery from './users/userQueries'
import userResolvers from './users/userResolvers'

const Query: QueryResolvers = {
  ...userQuery,
  ...reviewsQuery,
  ...petQuery
}

const Mutation: MutationResolvers = {
  ...userMutation,
  ...reviewsMutation,
  ...petMutation
}

const resolvers: Resolvers = {
  Query,
  Mutation,
  ...petResolvers,
  ...userResolvers,
  ...reviewsResolvers
}

export default resolvers
