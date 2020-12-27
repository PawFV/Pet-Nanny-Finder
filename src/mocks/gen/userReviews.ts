import { Reviews, User } from '@/utils/codegen/graphql'
import { lorem, random } from 'faker'

function getUserReviews(users: User[], userId: string) {
  const reviews: Reviews = {
    given: [],
    received: []
  }

  for (let i = 0; i < 3; i++) {
    reviews.given.push({
      id: random.uuid(),
      from: userId,
      to: randomUserId(users, userId),
      text: lorem.paragraph(2)
    })
    reviews.received.push({
      id: random.uuid(),
      from: randomUserId(users, userId), // TODO: Put random real stored usersID.
      to: userId,
      text: lorem.paragraph(2)
    })
  }
  return reviews
}

/**
 * @param users Array of users to get ids from.
 * @param excludedId unwanted ID, to avoid getting the same user origin ID
 * @description tries to get a random user Id, if excludedId matches same userId
 * generated, it will recursively call itself until it gets unique existent ID.
 */
const randomUserId = (users: User[], excludedId?: string) => {
  log.log('randomUserId -> users', users[randomUserIndex(users)])

  const randomId = users[randomUserIndex(users)].id
  return randomId === excludedId ? randomUserId(users, excludedId) : randomId
}

const randomUserIndex = (users: User[]) => Math.floor(Math.random() * users.length)

export default getUserReviews
