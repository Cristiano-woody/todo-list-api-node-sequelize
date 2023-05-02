import DataTypes from 'sequelize'
import PostgresDataSource from '../../db/PostgresDataSource'
import type logInterface from '../interfaces/logInterface'

export const logEntity = PostgresDataSource.define<logInterface>('logs', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  date: {
    type: DataTypes.STRING
  },
  message: {
    type: DataTypes.STRING
  },
  ip_client: {
    type: DataTypes.STRING
  },
  hostname_client: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'logs',
  timestamps: false
})

export default logEntity
