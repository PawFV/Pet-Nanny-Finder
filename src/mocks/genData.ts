import faker from 'faker'
import fs from 'fs-extra'

const users: User[] = []

for (let i = 0; i < 10; i++) {
  users.push({
    id: faker.random.uuid(),
    email: faker.internet.email(),
    name: faker.internet.userName(),
    password: faker.internet.password()
  })
}

fs.writeJSONSync('users.json', users)
