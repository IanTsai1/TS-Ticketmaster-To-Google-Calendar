//defines schema of database
import {Table,Column,Model,DataType} from 'sequelize-typescript';


@Table({
  timestamps: true,
  tableName: "Users",
  modelName: "users",
})

class User extends Model{
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  declare id: string;

  @Column({
    type: DataType.STRING,
  })
  declare firstName: string;

  @Column({
    type: DataType.STRING,
  })
  declare lastName: string;

  @Column({
    type: DataType.STRING,
  })
  declare email: string;

}

export default User;
