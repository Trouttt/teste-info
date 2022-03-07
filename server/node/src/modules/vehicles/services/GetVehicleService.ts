import 'reflect-metadata';
import { getRepository } from 'typeorm';

import Vehicle from '../infra/typeorm/entities/Vehicle';


class GetAllVehicleService {
  public async execute(id: string): Promise<Vehicle | undefined> {
    try {
      const urlsRepository = await getRepository(Vehicle);
      const link = await urlsRepository.findOne({ where: id });

      return link;
    } catch (err: any) {
      return err;
    }
  }
}
export default GetAllVehicleService;
