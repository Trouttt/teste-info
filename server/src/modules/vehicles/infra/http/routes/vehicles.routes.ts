/* eslint-disable prettier/prettier */
import { Response, Router } from 'express';
import VehiclesController from "../controllers/VehiclesController";

const vehiclesRouter = Router();
const vehiclesController = new VehiclesController();

vehiclesRouter.get('/', vehiclesController.getAll);
vehiclesRouter.get('/:id', vehiclesController.getById);
vehiclesRouter.post('/', vehiclesController.create);
vehiclesRouter.put('/', vehiclesController.update);
vehiclesRouter.delete('/:id', vehiclesController.delete);

export default vehiclesRouter;
