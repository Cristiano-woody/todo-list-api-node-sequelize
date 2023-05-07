import { type Request, type Response } from 'express'
import UserService from '../services/UserService'
import LogService from '../services/LogService'

const userService = new UserService()

const logService = new LogService()

class UserController {
  //
  async CreateUser (req: Request, res: Response): Promise<void> {
    try {
      const user = await userService.CreateUser(req)
      void logService.CreateLog(`create user: ${JSON.stringify(user)}`, req)
      res.status(201).json(user)
    } catch (error) {
      void logService.CreateLog('createUser: erro na requisição', req)
      res.status(400).send('requisićão inválida')
    }
  }

  async getAll (req: Request, res: Response): Promise<void> {
    try {
      const allUsers = await userService.getAll()
      void logService.CreateLog('get all users ', req)
      res.status(200).json(allUsers)
    } catch (error) {
      console.log(error)
      void logService.CreateLog('getAll: erro na requisição', req)
      res.status(400).send('requisicão inválida')
    }
  }

  async getById (req: Request, res: Response): Promise<void> {
    try {
      const user = await userService.getById(req)
      if (user !== undefined && user !== null) {
        void logService.CreateLog(`get user by id: ${JSON.stringify(user)}`, req)
        res.status(200).json(user)
      } else {
        void logService.CreateLog('getByID: usuario não encontrado', req)
        res.status(400).send('Usuário não encontrado')
      }
    } catch (error) {
      console.log(error)
      void logService.CreateLog('getByID: erro na requisição', req)
      res.status(400).send('requisicão inválida')
    }
  }

  async updateByID (req: Request, res: Response): Promise<void> {
    try {
      const user = await userService.updateByID(req)
      if (user !== undefined && user !== null) {
        void logService.CreateLog(`update user by id: ${JSON.stringify(user)}`, req)
        res.status(200).json(user)
      } else {
        void logService.CreateLog('updateByID: usuario não encontrado', req)
        res.status(400).send('Usuário não encontrado')
      }
    } catch (error) {
      console.log(error)
      void logService.CreateLog('updateByID: erro na requisição', req)
      res.status(400).send('requisicão inválida')
    }
  }

  async deleteByID (req: Request, res: Response): Promise<void> {
    try {
      const user = await userService.deleteByID(req)
      if (user !== undefined && user !== null) {
        void logService.CreateLog(`delete user by id: ${JSON.stringify(user)}`, req)
        res.status(200).json(`Usuário: ${user.name} deletado.`)
      } else {
        void logService.CreateLog('deleteByID: usuário não encontrado', req)
        res.status(400).send('Usuário não encontrado')
      }
    } catch (error) {
      console.log(error)
      void logService.CreateLog('deleteByID: erro na requisição delete', req)
      res.status(400).json('requisicão inválida')
    }
  }
}

export default UserController
