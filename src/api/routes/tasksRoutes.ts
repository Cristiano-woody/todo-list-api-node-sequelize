import Express, { type Request, type Response } from 'express'
import TasksController from '../controllers/TasksController'

const router = Express.Router()
const tasksController = new TasksController()

router.post('/task', (req: Request, res: Response) => { void tasksController.createTask(req, res) })

router.get('/task', (req: Request, res: Response) => { void tasksController.getAllTasks(req, res) })

router.get('/task/:title', (req: Request, res: Response) => { void tasksController.getTaskByID(req, res) })

router.patch('/task/:id', (req: Request, res: Response) => { void tasksController.updateByID(req, res) })

router.delete('/task/:id', (req: Request, res: Response) => { void tasksController.deleteTasksBy(req, res) })

//
//

export default router
