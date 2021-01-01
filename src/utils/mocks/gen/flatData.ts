import { User } from '@/@types/graphql'
import { address, internet, phone, random } from 'faker'
import { AvatarGenerator } from 'random-avatar-generator'
const avatar = new AvatarGenerator()

function generateUsersFlatData() {
  const users: User[] = []

  for (let i = 0; i < 10; i++) {
    const id = random.uuid()
    users.push({
      id,
      email: internet.email(),
      name: internet.userName(),
      password: internet.password(),
      avatar: avatar.generateRandomAvatar(),
      reputation: Math.round(Math.random() * 5),
      phone: phone.phoneNumber(),
      location: {
        latitude: address.latitude(40.0, 10.0, 5),
        longitud: address.longitude(40.0, 10.0, 5)
      }
    })
  }

  return users
}

export default generateUsersFlatData
