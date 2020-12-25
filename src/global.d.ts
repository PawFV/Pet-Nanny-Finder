interface User {
  id: string
  email: string
  password: string
  phone?: string
  name: string
  location: string
  reputation: number
  avatar: string
  chat: Chat
  reviews: Reviews
}

interface Owner extends User {
  pet?: Pet
}

// interface Carer extends User { }

interface Reviews {
  given: Review[]
  received: Review[]
}

interface Review {
  id: string
  userId: string
  text: string
}

type PetType = 'dog' | 'cat'

interface Pet {
  id: string
  ownerId: string
  age: number
  size: string
  type: PetType
  description: string
  image: string
}

interface Chat {
  id: string
  messages: ChatMessage[]
}

interface ChatMessage {
  userId: string
  message: string
}
