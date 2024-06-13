//defines schema of database
import {Table,Column,Model,DataType} from 'sequelize-typescript';


@Table({
  timestamps: true,
  tableName: "Users",
  modelName: "users",
})

class User extends Model{
  @Column({
    type: DataType.STRING,
  })
  declare firstName: string;

  @Column({
    type: DataType.STRING,
  })
  declare lastName: string;

}

export default User;
