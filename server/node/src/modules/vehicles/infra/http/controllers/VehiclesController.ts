import { Request, Response } from 'express';
import Http from '../../../../../shared/error/Http';
import CreateVehicleService from '../../../services/CreateVehicleService';
import GetAllVehicleService from '../../../services/GetAllService';

export default class VehiclesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { modelYear, maker, plate ,model, renavan, chassi } = request.body;

    const http = new Http()
    const createVehicleService = new CreateVehicleService();
    const vehicle = await createVehicleService.execute({
      modelYear, maker, model, plate, renavan, chassi
    })

    response.statusCode = http.response(vehicle);

    return response.json(vehicle);
  }

  public async getAll(response: Response): Promise<Response> {
    const getVehicleService = new GetAllVehicleService();
    const vehicle = await getVehicleService.execute()
    return response.json(vehicle);
  }
}
