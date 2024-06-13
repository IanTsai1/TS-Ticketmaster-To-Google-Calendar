import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log("This is the directory ", __dirname);
dotenv.config();
console.log("Port: ", process.env.PORT);
console.log("URL: ", process.env.DATABASE_URL);
const url = process.env.DATABASE_URL;
import { Sequelize } from "sequelize-typescript";
const sequelize = new Sequelize(url, {
    dialect: 'postgres',
    models: [__dirname + "/models"],
});
export default sequelize;
