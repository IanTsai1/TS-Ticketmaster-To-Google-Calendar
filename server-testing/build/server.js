import express from "express";
import morgan from 'morgan';
import cors from 'cors';
import "./database/connection.js";
import User from './database/models/users.js';
import http from 'http';
export const createServer = (app) => {
    app
        .disable("x-powered-by")
        .use(morgan("dev"))
        .use(express.urlencoded({ extended: true }))
        .use(express.json())
        .use(cors());
    app.get('/api/users', (request, response) => {
        User.findAll().then(users => {
            response.json(users);
        });
    });
    return http.createServer(app);
};
/*
"scripts": {
  "build": "rimraf build && npx tsc",
  "prestart": "npm run build",
  "start": "node build/index.js",
  "predev": "npm run build",
  "dev": "concurrently \"npx tsc -w\" \"nodemon build/index.js\""
}*/ 
