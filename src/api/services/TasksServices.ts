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
}

export default TasksService
