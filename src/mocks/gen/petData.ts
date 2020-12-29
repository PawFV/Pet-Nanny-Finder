import { random } from 'faker'
import { writeJsonSync } from 'fs-extra'
import { AvatarGenerator } from 'random-avatar-generator'
import users from '../../database/users.json'
import { Pet } from '../../utils/codegen/graphql'
const avatar = new AvatarGenerator()

function populateWithPetData() {
  const pets: Pet[] = []
  users.forEach(() => {
    pets.push({
      id: random.uuid(),
      age: Math.round(Math.random() * 10),
      description: random.words(5),
      image: avatar.generateRandomAvatar(),
      owner: '123',
      size: Math.round(Math.random() * 50 + 10),
      type: 'dog'
    })
  })
  return pets
}

writeJsonSync('./src/database/pets.json', populateWithPetData())
