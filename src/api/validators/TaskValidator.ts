
class TaskValidator {
  async CreateTaskValidator (req: { descriptiom: string, done: boolean, title: string }): Promise<boolean> {
    //
    if (req === null || req === undefined || typeof req !== 'object') {
      return false
    }
    if (req.title === null || req.title === undefined) {
      return false
    }
    if (req.done === null || req.done === undefined) {
      return false
    }
    return true
  }
}

export default TaskValidator
