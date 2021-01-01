import { AuthToken } from '@/@types'
import { NextFunction, Request, Response } from 'express-serve-static-core'
import jwt from 'jsonwebtoken'

export default (req: Request, res: Response, next: NextFunction) => {
  try {
    req.isAuth = false
    const authToken: AuthToken = req.get('Authorization')
    const token = authToken.split(' ')[1]

    const verifiedToken = jwt.verify(token, process.env.TOKEN_SECRET)

    if (verifiedToken) {
      req.isAuth = true
      req.user = verifiedToken
      return next()
    }
    return next()
  } catch (error) {
    console.log('error', error)
    return next()
  }
}
