import { type Request } from 'express'

class TaskValidator {
  async CreateTaskValidator (body: { descriptiom: string, done: boolean, title: string }): Promise<boolean> {
    //
    if (body === null || body === undefined || typeof body !== 'object') {
      return false
    }
    if (body.title === null || body.title === undefined) {
      return false
    }
    if (body.done === null || body.done === undefined) {
      return false
    }
    return true
  }

  async GetTaskByIDValidator (req: Request): Promise<boolean> {
    //
    if (req.params.title === null || req.params.title === undefined) {
      return false
    }
    return true
  }
}

export default TaskValidator
