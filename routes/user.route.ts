import express, { Router } from 'express'
import * as userController from '../controller/user.controller'

const router: Router = express.Router()

router.post('/signup', userController.signup)
router.post('/login', userController.login)

export default router
