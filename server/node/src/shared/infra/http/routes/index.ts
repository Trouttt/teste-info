
import { Router } from 'express';
import { createConnection } from 'typeorm';

createConnection();
const routes = Router();

export default routes;
