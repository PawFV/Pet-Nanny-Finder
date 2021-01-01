import { Resolvers } from '@/utils/codegen/graphql'
import { find } from 'lodash'
import users from '../../../database/users.json'

const reviewsResolvers: Resolvers = {
  Review: {
    users: ({ from, to }) => ({
      from: find(users, { id: from }),
      to: find(users, { id: to })
    })
  }
}

export default reviewsResolvers
