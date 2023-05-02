import { type Model } from 'sequelize'

interface tasksInterface extends Model {
  id: number
  done: boolean
  description: string
  title: string
}

export default tasksInterface
