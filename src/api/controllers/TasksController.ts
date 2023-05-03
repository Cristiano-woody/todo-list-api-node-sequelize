import { type Request, type Response } from 'express'
import LogService from '../services/LogService'
import TasksService from '../services/TasksService'

const tasksService = new TasksService()
const logService = new LogService()

class TasksController {
  //
  async createTask (req: Request, res: Response): Promise<void> {
    try {
      const task = await tasksService.createTasks(req)
      void logService.crete(`create task: ${JSON.stringify(task)}`, req)
      res.status(201).json(task)
    } catch (error) {
      console.log(error)
      void logService.crete('create task: erro na requisição', req)
      res.status(400).send('requisićão inválida')
    }
  }
}

export default TasksController
