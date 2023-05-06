import tasksEntity from '../entitys/tasksEntity'
import { type Request } from 'express'
import type tasksInterface from '../interfaces/tasksInterface'

class TasksService {
  //
  async CreateTasks (req: Request): Promise<tasksInterface> {
    const { title, description, done } = req.body
    const tasks = await tasksEntity.create({
      title: title as string,
      description: description as string,
      done: done as boolean
    })
    return tasks
  }

  async getAll (): Promise<tasksInterface[]> {
    const allTasks = await tasksEntity.findAll()
    return allTasks
  }

  async getTasksById (req: Request): Promise<tasksInterface | null> {
    const tasks = await tasksEntity.findByPk(parseInt(req.query.id as string))
    return tasks
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

  async deleteByID (req: Request): Promise<tasksInterface | undefined | null> {
    const task = await tasksEntity.findByPk(parseInt(req.query.id as string))
    if (task !== undefined && task !== null) {
      await tasksEntity.destroy({
        where: {
          id: task.id
        }
      })
      return task
    }
  }
}

export default TasksService
