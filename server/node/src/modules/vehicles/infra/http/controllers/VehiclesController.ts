import { Request, Response } from 'express';
import Http from '../../../../../shared/error/Http';
import CreateVehicleService from '../../../services/CreateVehicleService';
import DeleteVehicleService from '../../../services/DeleteVehicleService';
import GetAllVehicleService from '../../../services/GetVehicleAllService';
import GetVehicleByIdService from '../../../services/GetVehicleService';
import UpdateVehicleService from '../../../services/UpdateVehicleService';

export default class VehiclesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { modelYear, maker, plate, model, renavan, chassi } = request.body;

    const http = new Http()
    const createVehicleService = new CreateVehicleService();
    const vehicle = await createVehicleService.execute({
      modelYear, maker, model, plate, renavan, chassi
    })

    response.statusCode = http.response(vehicle);

    return response.json(vehicle);
  }

  public async getAll(request: Request, response: Response): Promise<Response> {
    const getVehicleService = new GetAllVehicleService();
    const vehicle = await getVehicleService.execute()
    return response.json(vehicle);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const http = new Http();
    const deleteVehicleService = new DeleteVehicleService();
    const vehicle = await deleteVehicleService.execute({
      id,
    });

    response.statusCode = http.response(vehicle);

    return response.json(vehicle);
  }
  public async getById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const http = new Http();
    const getVehicleByIdService = new GetVehicleByIdService();
    const vehicle = await getVehicleByIdService.execute(id);

    response.statusCode = http.response(vehicle);

    return response.json(vehicle);
  }
  public async update(request: Request, response: Response): Promise<Response> {
    const { id, modelYear, maker, model, plate, renavan, chassi } = request.body;
    const http = new Http();
    const updateVehicleService = new UpdateVehicleService();
    const vehicle = await updateVehicleService.execute({
      id, modelYear, maker, model, plate, renavan, chassi
    });

    response.statusCode = http.response(vehicle);
    console.log(vehicle)
    return response.status(response.statusCode).json(vehicle);
  }
}
