import { random } from 'faker'
import { writeJsonSync } from 'fs-extra'
import { AvatarGenerator } from 'random-avatar-generator'
import users from '../../database/users.json'
import { Pet } from '../../utils/codegen/graphql'
const avatar = new AvatarGenerator()

function populateWithPetData() {
  const pets: Pet[] = []
  users.forEach(user => {
    pets.push({
      id: random.uuid(),
      ownerId: user.id,
      description: random.words(5),
      image: avatar.generateRandomAvatar(),
      type: 'dog',
      age: Math.round(Math.random() * 10),
      size: Math.round(Math.random() * 50 + 10)
    })
  })
  return pets
}

writeJsonSync('./src/database/pets.json', populateWithPetData())
