import { MutationResolvers } from '@/utils/codegen/graphql'
import pets from '../../../database/pets.json'

const petMutation: MutationResolvers = {
  createPet: () => pets[0]
}

export default petMutation
