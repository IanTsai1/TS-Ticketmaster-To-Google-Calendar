import path from 'path';
import dotenv from 'dotenv';
dotenv.config({
    override: true,
    path: path.join(__dirname, '..', '.env')
});

const url: string = process.env.DATABASE_URL!;
import { Sequelize } from "sequelize-typescript";


const sequelize = new Sequelize(url,{
    dialect: 'postgres',
    models: [__dirname + "/models"],
});

export default sequelize;