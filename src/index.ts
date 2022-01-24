import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

const port = process.env.port || 5000;

app.get('/', (req, res) => res.send({ message: 'Docker Sample' }));

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
