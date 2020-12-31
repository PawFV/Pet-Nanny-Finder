import { MutationResolvers, QueryResolvers, Resolvers } from '@/utils/codegen/graphql'
import { filter, find } from 'lodash'
import pets from '../../database/pets.json'
import reviews from '../../database/reviews.json'
import users from '../../database/users.json'

const Query: QueryResolvers = {
  users: () => users,
  user: (_, { id }) => find(users, { id }),
  pets: () => pets,
  review: (_, { id }) => find(reviews, { id }),
  reviews: () => reviews
}

const Mutation: MutationResolvers = {
  createUser: (_, args) => ({ ...args, id: '123' }),
  createPet: () => pets[0]
}

const resolvers: Resolvers = {
  User: {
    pets: ({ id }) => filter(pets, { ownerId: id }),
    givenReviews: ({ id }) => filter(reviews, { from: id }),
    receivedReviews: ({ id }) => filter(reviews, { to: id })
  },
  Pet: {
    owner: ({ ownerId }) => find(users, { id: ownerId })
  },
  Review: {
    users: ({ from, to }) => ({
      from: find(users, { id: from }),
      to: find(users, { id: to })
    })
  },
  Query,
  Mutation
}

export default resolvers
