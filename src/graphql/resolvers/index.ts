import { MutationResolvers, QueryResolvers, Resolvers } from '@/utils/codegen/graphql'
import pets from '../../database/pets.json'
import reviews from '../../database/reviews.json'
import users from '../../database/users.json'

const Query: QueryResolvers = {
  users: () => users,
  user: (_, { id }) => users.find(u => u.id === id),
  pets: () => pets,
  review: (_, { id }) => reviews.find(review => id === review.id),
  reviews: () => reviews
}

const Mutation: MutationResolvers = {
  createUser: (_, args) => ({ ...args, id: '123' }),
  createPet: () => pets[0]
}

const resolvers: Resolvers = {
  User: {
    pet: parent => pets.filter(pet => pet.ownerId === parent.id),
    givenReviews: parent => reviews.filter(review => review.from === parent.id),
    receivedReviews: parent => reviews.filter(review => review.to === parent.id)
  },
  Pet: {
    owner: parent => users.find(user => user.id === parent.ownerId)
  },
  Review: {
    users: parent => ({
      from: users.find(user => user.id === parent.from),
      to: users.find(user => user.id === parent.to)
    })
  },
  Query,
  Mutation
}

export default resolvers
