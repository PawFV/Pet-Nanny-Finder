import { QueryResolvers } from '@/utils/codegen/graphql'
import pets from '../../../database/pets.json'

const petQuery: QueryResolvers = {
  pets: () => pets
}

export default petQuery
