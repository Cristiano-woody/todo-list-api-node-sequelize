import DataTypes from 'sequelize'
import PostgresDataSource from '../../db/PostgresDataSource'
import type tasksInterface from '../interfaces/tasksInterface'

export const tasksEntity = PostgresDataSource.define<tasksInterface>('tasks', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  done: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  },
  title: {
    type: DataTypes.STRING
  }

}, {
  tableName: 'tasks',
  timestamps: false
})

export default tasksEntity
