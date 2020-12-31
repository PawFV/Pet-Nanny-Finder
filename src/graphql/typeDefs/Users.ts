import { gql } from 'apollo-server-express'

export default gql`
  type GeoLocation {
    latitude: String
    longitud: String
  }

  type User {
    id: ID!
    email: String!
    name: String!
    password: String
    phone: String
    reputation: Int
    avatar: String
    givenReviews: [Review!]
    receivedReviews: [Review!]
    pets: [Pet!]
    location: GeoLocation
  }
`
