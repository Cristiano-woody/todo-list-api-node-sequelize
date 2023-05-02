import { type Model } from 'sequelize'

interface tasksInterface extends Model {
  id: number
  done: boolean
  date_criation: string
  description: string
  name: string
}

export default tasksInterface
