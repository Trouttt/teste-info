import { Router } from 'express';
import VehiclesController from "../controllers/VehiclesController";

const vehiclesRouter = Router();
const vehiclesController = new VehiclesController();

vehiclesRouter.post('/', vehiclesController.create);

export default vehiclesRouter;
