import { type Request, type Response } from 'express'
import LogService from '../services/LogService'
import TasksService from '../services/TasksService'
import TaskValidator from '../validators/TaskValidator'

const tasksService = new TasksService()
const logService = new LogService()
const taskValidator = new TaskValidator()

class TasksController {
  //
  async createTask (req: Request, res: Response): Promise<void> {
    try {
      const valid = await taskValidator.CreateTaskValidator(req.body)
      if (!valid) {
        void logService.CreateLog('create task: parametros inválidos', req)
        res.status(400).send('create task: parametros inválidos')
        return
      }

      const task = await tasksService.CreateTasks(req)
      if (typeof task !== 'object') {
        void logService.CreateLog('create task: errro ao registrar no banco', req)
        res.status(400).send('create task: errro ao registrar no banco')
        return
      }

      void logService.CreateLog(`create task: ${JSON.stringify(task)}`, req)
      res.status(201).json(task)
      //
    } catch (error) {
      void logService.CreateLog('create task: erro na requisição', req)
      res.status(500).send('erro na requisição')
    }
  }

  async getTaskByID (req: Request, res: Response): Promise<void> {
    try {
      const validate = await taskValidator.GetTaskByIDValidator(req)
      if (!validate) {
        void logService.CreateLog('get tasks by id: erro na requisição', req)
        res.status(400).send('requisićão inválida')
        return
      }
      const task = await tasksService.getTasksById(req)
      if (task === undefined || task === null) {
        void logService.CreateLog('get tasks by id: task inexistente', req)
        res.status(400).send('get tasks by id: task inexistente')
        return
      }
      void logService.CreateLog(`get task by ID: ${JSON.stringify(task)}`, req)
      res.status(200).json(task)
      //
    } catch (error) {
      void logService.CreateLog('get tasks by id: erro na requisição', req)
      res.status(500).send('erro na requisição')
    }
  }

  async getAllTasks (req: Request, res: Response): Promise<void> {
    try {
      const allTasks = await tasksService.getAll()
      if (allTasks !== null || allTasks !== undefined) {
        void logService.CreateLog('get all tasks', req)
        res.status(200).json(allTasks)
      }
    } catch (error) {
      void logService.CreateLog('getAllTasks: erro na requisição', req)
      res.status(500).send('erro na requisição')
    }
  }

  async updateByID (req: Request, res: Response): Promise<void> {
    try {
      const task = await tasksService.updateByID(req)
      if (task !== undefined && task !== null) {
        void logService.CreateLog(`update task by id: ${JSON.stringify(task)}`, req)
        res.status(200).json(task)
      } else {
        void logService.CreateLog('task não encontrada', req)
        res.status(404).send('task não encontrada')
      }
    } catch (error) {
      void logService.CreateLog('updateByID: erro na requisição', req)
      res.status(500).send('erro na requisição')
    }
  }

  async deleteTasksBy (req: Request, res: Response): Promise<void> {
    try {
      const task = await tasksService.deleteByID(req)
      if (task !== undefined && task !== null) {
        void logService.CreateLog(`deleteById: ${JSON.stringify(task)}`, req)
        res.status(200).json(`Task: ${task.title} deletado.`)
      } else {
        void logService.CreateLog('deleteById: usuário não encontrado', req)
        res.status(404).send('Task não encontrado')
      }
    } catch (error) {
      void logService.CreateLog('deleteById: erro na requisição', req)
      res.status(500).send('erro na requisição')
    }
  }
}

export default TasksController
