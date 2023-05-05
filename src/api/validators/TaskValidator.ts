class TaskValidator {
  async CreateTaskValidator (req: any): Promise<string[]> {
    const errors: string[] = []

    if (req === null || req === undefined || typeof req !== 'object') {
      errors.push('Entrada inválida.')
    }
    if (req.title === null || req.title === undefined) {
      errors.push('Parametro Título é obrigatório')
    }
    if (req.done === null || req.done === undefined) {
      errors.push('Parametro done é obrigatório')
    }
    return errors
  }
}

export default TaskValidator
