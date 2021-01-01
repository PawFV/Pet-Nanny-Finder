import { random } from 'faker'
import { random as randomNumber } from 'lodash'
import { AvatarGenerator } from 'random-avatar-generator'
import { Pet, User } from '../../utils/codegen/graphql'
const avatar = new AvatarGenerator()

export default (users: User[]) => {
  const pets: Pet[] = []
  users.forEach(user => {
    pets.push({
      id: random.uuid(),
      name: random.word(),
      ownerId: user.id,
      description: random.words(5),
      image: avatar.generateRandomAvatar(),
      type: 'dog',
      age: randomNumber(0, 10),
      size: randomNumber(10, 50)
    })
  })
  return pets
}
