import { MutationResolvers, QueryResolvers, Resolvers } from '@/utils/codegen/graphql'
import pets from '../../database/pets.json'
import reviews from '../../database/reviews.json'
import users from '../../database/users.json'

const Query: QueryResolvers = {
  users: () => users,
  user: (_, { id }) => {
    const user = users.find(u => u.id === id)
    return user
  },
  pets: () => pets,
  review: (_, { id }) => reviews.find(r => id === r.id),
  reviews: () => reviews
}

const Mutation: MutationResolvers = {
  createUser: (_, { name, email, password }) => {
    return {
      id: '123',
      name,
      email,
      password,
      reviews: {}
    }
  },
  createPet: (_, { pet }) => pets[0]
}

const resolvers: Resolvers = {
  User: {
    pet: parent => pets.filter(pet => pet.ownerId === parent.id),
    givenReviews: parent => reviews.filter(r => r.from === parent.id),
    receivedReviews: parent => reviews.filter(r => r.to === parent.id)
  },
  Pet: {
    owner: parent => users.find(user => user.id === parent.ownerId)
  },
  Query,
  Mutation
}

export default resolvers
