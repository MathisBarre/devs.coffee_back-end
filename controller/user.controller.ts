import { Response, Request } from 'express'
import bcrypt from 'bcrypt'
import User, { Iuser } from '../models/user.model'
import jwt from 'jsonwebtoken'

export function signup(req: Request, res: Response): void {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash: string) => {
      User.create({
        email: req.body.email,
        password: hash
      })
        .then(() => {
          res.status(200).json({ message: 'New user successfully added' })
        })
        .catch((error: Error) => {
          res.status(400).json({ message: error.message })
        })
    })
    .catch((error: Error) => {
      res.status(500).json({ message: error.message })
    })
}

export function login(req: Request, res: Response): void {
  User.findOne({ email: req.body.email })
    .then((user: Iuser | null) => {
      if (user === null) {
        res.status(401).json({ message: 'Invalid email' })
      } else {
        bcrypt
          .compare(req.body.password, user.password)
          .then((valid: boolean) => {
            if (!valid) {
              res.status(401).json({ message: 'Invalid password' })
            } else {
              res.status(200).json({
                userId: user._id,
                token: jwt.sign({ userId: user._id }, 'RANDOM_TOKEN_SECRET', { expiresIn: '24h' })
              })
            }
          })
          .catch((error: Error) => {
            res.status(500).json({ message: error.message })
          })
      }
    })
    .catch((error: Error) => {
      res.status(500).json({ message: error.message })
    })
}
