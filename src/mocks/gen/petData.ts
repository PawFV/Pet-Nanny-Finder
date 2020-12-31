import { random } from 'faker'
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
      age: Math.round(Math.random() * 10),
      size: Math.round(Math.random() * 50 + 10)
    })
  })
  return pets
}
