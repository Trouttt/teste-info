import 'reflect-metadata';
import { getRepository } from 'typeorm';

import Vehicle from '../infra/typeorm/entities/Vehicle';


class GetAllVehicleService {
  public async execute(): Promise<Array<Vehicle>> {
    try {
      const urlsRepository = await getRepository(Vehicle);
      const links = await urlsRepository.find();

      return links;
    } catch (err: any) {
      return err;
    }
  }
}
export default GetAllVehicleService;
