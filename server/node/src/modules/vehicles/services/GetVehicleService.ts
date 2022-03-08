import 'reflect-metadata';
import { getRepository } from 'typeorm';
import validate from 'uuid-validate';
import AppError from '../../../shared/error/AppError';

import Vehicle from '../infra/typeorm/entities/Vehicle';


class GetVehicleByIdService {
  public async execute(id: string): Promise<Vehicle | any> {
    try {
      const urlsRepository = await getRepository(Vehicle);
      const uuidIsValid = validate(id)

      if (!uuidIsValid) {
        throw new AppError('Id inválido!!!', 400);
      }
      const vehicle = await urlsRepository.findOne(id);
      return vehicle;
    } catch (err: any) {
      return err;
    }
  }
}
export default GetVehicleByIdService;
