import { type Model } from 'sequelize'

interface UserInterface extends Model {
  id: number
  name: string
  age: number
  gender: string
}

export default UserInterface
