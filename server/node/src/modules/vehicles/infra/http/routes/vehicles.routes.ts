import { Response, Router } from 'express';
import VehiclesController from "../controllers/VehiclesController";

const vehiclesRouter = Router();
const vehiclesController = new VehiclesController();

vehiclesRouter.get('/', vehiclesController.getAll);
vehiclesRouter.post('/', vehiclesController.create);
vehiclesRouter.delete('/:id', vehiclesRouter)
export default vehiclesRouter;
