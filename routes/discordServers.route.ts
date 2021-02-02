import express, { Router } from 'express'
import * as discordServerCtrl from '../controller/discordServer.controller'

const router: Router = express.Router()

router.get('/', discordServerCtrl.getAllDiscordServers)
router.get('/:id', discordServerCtrl.getOneDiscordServer)
router.post('/', discordServerCtrl.addOneDiscordServer)
router.put('/:id', discordServerCtrl.updateOneDiscordServer)
router.delete('/:id', discordServerCtrl.deleteOneDiscordServer)

export default router
