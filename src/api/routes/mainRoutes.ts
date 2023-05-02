import Express, { type Request, type Response } from 'express'
import UserController from '../controllers/USerController'

const router = Express.Router()
const userController = new UserController()

router.post('/user', (req: Request, res: Response) => { void userController.create(req, res) })

router.get('/user', (req: Request, res: Response) => { void userController.getAll(req, res) })

router.get('/user/:id', (req: Request, res: Response) => { void userController.getById(req, res) })

router.patch('/user/:id', (req: Request, res: Response) => { void userController.updateByID(req, res) })

router.delete('/user/:id', (req: Request, res: Response) => { void userController.deleteByID(req, res) })

//
//
//
//

export default router
