import express from "express";
import morgan from 'morgan';
import cors from 'cors';
import { createServer } from "./server.js";
const app = express();
const middleware = morgan('tiny');
app.use(middleware);
app.use(express.json());
app.use(cors());
const port = 3001;
app.get("/", (req, res) => {
    res.send("HI");
});
const server = createServer(app);
server.listen(port, () => {
    console.log(`API running on ${port}`);
});
