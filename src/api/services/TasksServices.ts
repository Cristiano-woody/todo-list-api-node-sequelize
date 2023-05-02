import tasksEntity from '../entitys/tasksEntity'
import { type Request } from 'express'
import type tasksInterface from '../interfaces/tasksInterface'

class TasksService {
  //
  async createTasks (req: Request): Promise<tasksInterface> {
    const tasks = await tasksEntity.create({
      title: `${req.body.title as string}`,
      description: `${req.body.description as string}`,
      done: req.body.done as boolean
    })
    return tasks
  }

  async getAll (): Promise<tasksInterface[]> {
    const allTasks = await tasksEntity.findAll()
    return allTasks
  }

  async getTasksById (req: Request): Promise<tasksInterface | undefined> {
    const tasks = await tasksEntity.findByPk(parseInt(req.query.id as string))
    if (tasks != null) {
      return tasks
    }
  }
}

export default TasksService
