import 'reflect-metadata';
import { getCustomRepository, getRepository } from 'typeorm';
import AppError from '../../../shared/error/AppError';
import ICreateVehicleDTO from '../dtos/ICreateVehicleDTO';
import VehiclesRepository from '../repositories/VehiclesRepository';
import Vehicle from '../infra/typeorm/entities/Vehicle';

class CreateVehicleService {
  public async execute({
    modelYear,
    maker,
    model,
    plate,
    renavan,
    chassi = '',
  }: ICreateVehicleDTO): Promise<Vehicle> {
    try {
      const vehiclesRepository = getCustomRepository(VehiclesRepository);

      const checkVehicleExists = await vehiclesRepository.findVehicleByPlate(
        plate,
      );

      const verifyChassiIsRegistered = await vehiclesRepository.verifyIfChassiIsRegistered(
        chassi,
      );

      const verifyRenavanIsRegistered = await vehiclesRepository.verifyIfRenavanIsRegistered(
        renavan,
      );

      if (checkVehicleExists) {
        throw new AppError('O carro já está cadastrado!!!', 400);
      }

      if (verifyChassiIsRegistered) {
        throw new AppError('O chassi já está cadastrado!!!', 400);
      }

      if (verifyRenavanIsRegistered) {
        throw new AppError('O renavan já está cadastrado!!!', 400);
      }

      if (modelYear.length !== 4) {
        throw new AppError(
          'Campo "ano do modelo" deve ter 4 caracteres!!!',
          400,
        );
      }
      console.log(maker);
      if (maker.length < 1) {
        console.log('hm');
        throw new AppError(
          'Campo "fabricante" deve ter pelo menos 1 carácter!!!',
          400,
        );
      }
      if (model.length < 1) {
        throw new AppError(
          'Campo "modelo" deve ter pelo menos 1 carácter!!!',
          400,
        );
      }
      if (plate.length < 7) {
        throw new AppError(
          'Campo "placa" deve ter no mínimo 7 e no máximo 8 caracteres!!!',
          400,
        );
      }
      if (renavan.length !== 11) {
        throw new AppError('Campo "renavam" deve ter 11 caracteres!!!', 400);
      }
      if (chassi.length !== 17) {
        throw new AppError('Campo "chassi" deve ter 17 caracteres!!!', 400);
      }

      const vehicle = await vehiclesRepository.create({
        modelYear,
        maker,
        model,
        plate,
        renavan,
        chassi,
      });

      await vehiclesRepository.save(vehicle);

      return vehicle;
    } catch (err: any) {
      return err;
    }
  }
}
export default CreateVehicleService;
