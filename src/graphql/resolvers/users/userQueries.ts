import { QueryResolvers } from '@/@types/graphql'
import { find } from 'lodash'
import users from '../../../database/users.json'

const userQuery: QueryResolvers = {
  users: () => users,
  user: (_, { id }) => find(users, { id })
}

export default userQuery
