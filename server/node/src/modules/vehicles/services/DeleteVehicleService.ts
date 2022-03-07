import 'reflect-metadata';

import { getRepository } from 'typeorm';

import AppError from '../../../shared/error/AppError';

import Vehicle from '../infra/typeorm/entities/Vehicle';

interface IRequest {

  id: string;

}

class DeleteVehicleService {

  public async execute({ id }: IRequest): Promise<Vehicle> {

    try {

      const vehiclesRepository = await getRepository(Vehicle);

      if (!id || id.length === 0) {

        throw new AppError('Id inválido!!!', 400);

      }

      const vehicle = await vehiclesRepository.findOne({

        where: { id },

      });

      if (!vehicle) {

        throw new AppError('O veículo não existe!!!', 400);

      }

      await vehiclesRepository.delete(id);

      return vehicle;

    } catch (err: any) {

      return err;

    }

  }

}

export default DeleteVehicleService;
