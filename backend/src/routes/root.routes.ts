import { Router } from 'express'
import whiteListController from '../controllers/whiteList.controller'

const rootRouter: Router = Router()

rootRouter.use('/list', whiteListController)

export default rootRouter
