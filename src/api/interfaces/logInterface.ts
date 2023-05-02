import { type Model } from 'sequelize'

interface logInterface extends Model {
  id: number
  date: Date
  mensage: string
  ip_client: string
  hostname_client: string
}

export default logInterface
