import DataTypes from 'sequelize'
import PostgresDataSource from '../../db/PostgresDataSource'
import type UserInterface from '../interfaces/userInterface'

export const userEntity = PostgresDataSource.define<UserInterface>('user', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  age: {
    type: DataTypes.INTEGER
  },
  gender: {
    type: DataTypes.STRING
  }

}, {
  tableName: 'users',
  timestamps: false
})

export default userEntity
