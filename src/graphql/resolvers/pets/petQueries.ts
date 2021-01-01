import { QueryResolvers } from '@/@types/graphql'
import pets from '../../../database/pets.json'

const petQuery: QueryResolvers = {
  pets: () => pets
}

export default petQuery
