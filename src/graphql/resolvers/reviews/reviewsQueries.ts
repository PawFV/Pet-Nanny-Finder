import { QueryResolvers } from '@/@types/graphql'
import { find } from 'lodash'
import reviews from '../../../database/reviews.json'

const reviewsQuery: QueryResolvers = {
  review: (_, { id }) => find(reviews, { id }),
  reviews: () => reviews
}

export default reviewsQuery
