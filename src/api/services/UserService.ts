import userEntity from '../entitys/userEntity'
import { type Request } from 'express'
import type UserInterface from '../interfaces/userInterface'

class UserService {
  //
  async create (req: Request): Promise<UserInterface> {
    const user = await userEntity.create({
      name: `${req.body.name as string}`,
      age: parseInt(req.body.age),
      gender: `${req.body.gender as string}`
    })
    return user
  }

  async getAll (): Promise<UserInterface[]> {
    const user = await userEntity.findAll()
    return user
  }

  async getById (req: Request): Promise<UserInterface | undefined> {
    const user = await userEntity.findByPk(parseInt(req.query.id as string))
    if (user != null) {
      return user
    }
  }

  async updateByID (req: Request): Promise<UserInterface | undefined> {
    const results = await userEntity.findByPk(parseInt(req.query.id as string))
    if (results !== null && results !== undefined) {
      const user = results
      if (req.body.name !== undefined) {
        user.name = req.body.name
      }
      if (req.body.age !== undefined) {
        user.age = req.body.age
      }
      if (req.body.gender !== undefined) {
        user.gender = req.body.gender
      }

      if (req.body.name !== undefined || req.body.age !== undefined || req.body.gender !== undefined) {
        await user.save()
        return user
      }
    }
  }

  async deleteByID (req: Request): Promise<UserInterface | undefined | null> {
    const user = await userEntity.findByPk(parseInt(req.query.id as string))
    if (user !== undefined && user !== null) {
      await userEntity.destroy({
        where: {
          id: user.id
        }
      })
      return user
    }
  }
}

export default UserService
