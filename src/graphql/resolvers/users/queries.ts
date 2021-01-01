import { QueryResolvers } from '@/utils/codegen/graphql'
import { find } from 'lodash'
import users from '../../../database/users.json'

export const Query: QueryResolvers = {
  users: () => users,
  user: (_, { id }) => find(users, { id })
}
