import genUserData from './gen/flatData'
import genPetData from './gen/petData'
import genReviewData from './gen/userReviews'
import fs from 'fs-extra'

const users = genUserData()
const reviews = genReviewData(users)
const pets = genPetData(users)

fs.writeJsonSync('./src/database/users.json', users, { spaces: 2 })
fs.writeJsonSync('./src/database/reviews.json', reviews, { spaces: 2 })
fs.writeJsonSync('./src/database/pets.json', pets, { spaces: 2 })
