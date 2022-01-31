import express from 'express';
import dotenv from 'dotenv';
import 'reflect-metadata';
import { db_connect } from './db';
dotenv.config();
const app = express();

db_connect();

app.use(express.json());
require('./route/main_route')(app);

const port = process.env.port || 5000;
app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
