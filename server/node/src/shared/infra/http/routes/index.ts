
import { Router } from 'express';
import { createConnection } from 'typeorm';
import vehiclesRouter from '../../../../modules/vehicles/infra/http/routes/vehicles.routes';

createConnection();
const routes = Router();

routes.use('/vehicles', vehiclesRouter);

export default routes;
