import express, { Router } from 'express'
import authVerification from 'middleware/auth'
import * as discordServerCtrl from '../controller/discordServer.controller'

const router: Router = express.Router()

router.get('/', discordServerCtrl.getAllDiscordServers)
router.get('/:id', discordServerCtrl.getOneDiscordServer)
router.post('/', authVerification, discordServerCtrl.addOneDiscordServer)
router.put('/:id', authVerification, discordServerCtrl.updateOneDiscordServer)
router.delete('/:id', authVerification, discordServerCtrl.deleteOneDiscordServer)

export default router
