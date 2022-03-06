import { Request, Response } from 'express';

export default class VehiclesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { modelYear, maker, model, string, renavan, chassi } = request.body;

    return response.send('temp');
  }
}
