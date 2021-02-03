import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export default function authVerification(req: Request, res: Response, next: NextFunction): void {
  try {
    const authHeader: string = req.headers.authorization ?? ''
    if (authHeader === '') throw new Error('No authorization head found')

    const token: string = authHeader.split(' ')[1]
    const decodedToken: any = jwt.verify(token, 'RANDOM_TOKEN_SECRET')
    const userId: string | undefined = decodedToken.userId

    if (req.body?.userId !== userId) throw new Error('Invalid user ID')

    next()
  } catch (error: any) {
    res.status(401).json({ message: error.message ?? 'Invalid request' })
  }
}
