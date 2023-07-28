/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to coding-dojo-backend!' });
});

app.get('/quotes', (req, res) => {
  res.send({ quotes: [
    "test test test",
    "asd asd asd ",
    "qwe qwe qwe",
    "zxc zxc zxc",
    "rty rty rty",
    "fgh fgh fgh",
  ] 
});
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
