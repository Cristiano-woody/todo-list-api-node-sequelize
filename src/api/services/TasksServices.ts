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

  async updateByID (req: Request): Promise<tasksInterface | undefined> {
    const results = await tasksEntity.findByPk(parseInt(req.query.id as string))
    if (results !== null && results !== undefined) {
      const tasks = results
      if (req.body.title !== undefined) {
        tasks.title = req.body.title
      }
      if (req.body.description !== undefined) {
        tasks.description = req.body.description
      }
      if (req.body.done !== undefined) {
        tasks.done = req.body.done
      }

      if (req.body.title !== undefined || req.body.description !== undefined || req.body.done !== undefined) {
        await tasks.save()
        return tasks
      }
    }
  }
}

export default TasksService
