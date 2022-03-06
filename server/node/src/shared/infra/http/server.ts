/* eslint-disable no-console */
import express from 'express';

const app = express();

app.listen(3333, () => {
  console.log('Servidor NODE está online!!');
});
