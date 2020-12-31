import { User } from '@/utils/codegen/graphql'
import { lorem, random } from 'faker'
import { Review } from '../../utils/codegen/graphql'

function getUserReviews(users: User[]) {
  const reviews: Review[] = []

  users.forEach(user => {
    for (let i = 0; i < 3; i++) {
      reviews.push({
        id: random.uuid(),
        from: user.id,
        to: randomUserId(users, user.id),
        text: lorem.paragraph(2)
      })
      reviews.push({
        id: random.uuid(),
        from: randomUserId(users, user.id),
        to: user.id,
        text: lorem.paragraph(2)
      })
    }
  })

  return reviews
}

/**
 * @param users Array of users to get ids from.
 * @param excludedId unwanted ID, to avoid getting the same user origin ID
 * @description tries to get a random user Id, if excludedId matches same userId
 * generated, it will recursively call itself until it gets unique existent ID.
 */
const randomUserId = (users: User[], excludedId?: string) => {
  const randomId = users[randomUserIndex(users)].id
  return randomId === excludedId ? randomUserId(users, excludedId) : randomId
}

const randomUserIndex = (users: User[]) => Math.floor(Math.random() * users.length)

export default getUserReviews
