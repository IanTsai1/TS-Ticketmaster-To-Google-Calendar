import dotenv from 'dotenv';
import express from "express";
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
//import User from './database/models/users';
import ticketMaster from './services/ticketMaster.js';
import googleOAuthRoutes from './services/google.js';

const app = express();
const middleware = morgan('tiny');
app.use(middleware);
app.use(express.json());
app.use(cors());
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//add frontend
app.use(express.static('dist'));

dotenv.config();

app.get("/", (req,res)=>{
  res.send("test");
})

//for database
/*
app.get('/api/users', (request, response) => {
    User.findAll().then((users: User[]) => {
      response.json(users);
    })
})*/

app.use("/api/data",ticketMaster)

app.use("/",googleOAuthRoutes)

//find solution for this
/*
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});*/


const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})



