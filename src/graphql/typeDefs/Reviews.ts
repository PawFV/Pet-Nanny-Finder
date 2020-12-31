import { gql } from 'apollo-server-express'

export default gql`
  type Destinies {
    from: User
    to: User
  }

  type Review {
    id: ID!
    from: ID!
    to: ID!
    users: Destinies
    text: String
  }
`
