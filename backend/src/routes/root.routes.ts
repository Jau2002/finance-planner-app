import { Router } from 'express'
import whiteListController from '../controllers/whiteList.controller'
import healthCheck from './healthCheck'

const rootRouter: Router = Router()

rootRouter.use('/health', healthCheck)

rootRouter.use('/list', whiteListController)

export default rootRouter
