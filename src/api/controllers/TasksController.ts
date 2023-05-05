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

  async getTaskByID (req: Request, res: Response): Promise<void> {
    try {
      const task = await tasksService.getTasksById(req)
      if (task !== undefined && task !== null) {
        void logService.crete(`get task by ID: ${JSON.stringify(task)}`, req)
        res.status(200).json(task)
      }
    } catch (error) {
      void logService.crete('get tasks by id: erro na requisição', req)
      res.status(400).send('requisićão inválida')
    }
  }

  async getAllTasks (req: Request, res: Response): Promise<void> {
    try {
      const allTasks = await tasksService.getAll()
      void logService.crete('get all tasks', req)
      res.status(200).json(allTasks)
    } catch (error) {
      void logService.crete('getAllTasks: erro na requisição', req)
      res.status(400).send('getAllTasks: erro na requisição')
    }
  }

  async updateByID (req: Request, res: Response): Promise<void> {
    try {
      const task = await tasksService.updateByID(req)
      if (task !== undefined && task !== null) {
        void logService.crete(`update task by id: ${JSON.stringify(task)}`, req)
        res.status(200).json(task)
      } else {
        void logService.crete('updateByID: usuario não encontrado', req)
        res.status(400).send('Usuário não encontrado')
      }
    } catch (error) {
      void logService.crete('updateByID: erro na requisição', req)
      res.status(400).send('requisicão inválida')
    }
  }

  async deleteTasksBy (req: Request, res: Response): Promise<void> {
    try {
      const task = await tasksService.deleteByID(req)
      if (task !== undefined && task !== null) {
        void logService.crete(`deleteById: ${JSON.stringify(task)}`, req)
        res.status(200).json(`Usuário: ${task.title} deletado.`)
      } else {
        void logService.crete('deleteById: usuário não encontrado', req)
        res.status(400).send('Usuário não encontrado')
      }
    } catch (error) {
      void logService.crete('deleteById: erro na requisição', req)
      res.status(400).send('requisicão inválida')
    }
  }
}

export default TasksController
