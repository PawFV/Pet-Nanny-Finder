import { Resolvers } from '@/utils/codegen/graphql'
import { filter } from 'lodash'
import pets from '../../../database/pets.json'
import reviews from '../../../database/reviews.json'

const userResolvers: Resolvers = {
  User: {
    pets: ({ id }) => filter(pets, { ownerId: id }),
    givenReviews: ({ id }) => filter(reviews, { from: id }),
    receivedReviews: ({ id }) => filter(reviews, { to: id })
  }
}

export default userResolvers
