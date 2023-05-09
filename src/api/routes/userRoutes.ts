import Express, { type Request, type Response } from 'express'
import UserController from '../controllers/USerController'

const router = Express.Router()
const userController = new UserController()

router.post('/user', (req: Request, res: Response) => { void userController.CreateUser(req, res) })

router.get('/user', (req: Request, res: Response) => { void userController.GetUserById(req, res) })

router.get('/user/:id', (req: Request, res: Response) => { void userController.GetUserById(req, res) })

router.patch('/user/:id', (req: Request, res: Response) => { void userController.UpdateUserById(req, res) })

router.delete('/user/:id', (req: Request, res: Response) => { void userController.DeleteUserById(req, res) })

//
//

export default router
