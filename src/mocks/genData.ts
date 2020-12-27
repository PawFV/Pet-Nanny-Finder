import fs from 'fs-extra'
import generateUsersFlatData from './gen/flatData'
import getUserReviews from './gen/userReviews'

function populateWithUserData() {
  const users = generateUsersFlatData()
  users.forEach(user => (user.reviews = getUserReviews(users, user.id)))
  return users
}

const usersData = populateWithUserData()

fs.writeJsonSync('./src/database/users.json', usersData, { spaces: 2 })
