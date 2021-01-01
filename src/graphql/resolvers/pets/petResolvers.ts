import { Resolvers } from '@/utils/codegen/graphql'
import { find } from 'lodash'
import users from '../../../database/users.json'

const petResolvers: Resolvers = {
  Pet: {
    owner: ({ ownerId }) => find(users, { id: ownerId })
  }
}

export default petResolvers
