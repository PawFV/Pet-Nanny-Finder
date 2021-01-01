export {}

declare global {
  namespace Express {
    interface Request {
      isAuth: boolean
      user: string | unknown
    }
  }
}

export type AuthToken = string | undefined
