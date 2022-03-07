import 'reflect-metadata';
import { getCustomRepository, getRepository, UpdateResult } from 'typeorm';
import AppError from '../../../shared/error/AppError';
import VehiclesRepository from '../repositories/VehiclesRepository';
import Vehicle from '../infra/typeorm/entities/Vehicle';
import IUpdateVehicleDTO from '../dtos/IUpdateVehicleDTO';
import { response } from 'express';
class UpdateVehicleService {
  public async execute({
    modelYear,
    maker,
    model,
    plate,
    renavan,
    chassi = '',
    id,
  }: IUpdateVehicleDTO): Promise<UpdateResult | undefined | any> {
    try {

      const vehiclesRepository = getCustomRepository(VehiclesRepository);

      const verifyPlateIsRegistered = await vehiclesRepository.findVehicleByPlate(plate);

      const verifyChassiIsRegistered = await vehiclesRepository.verifyIfChassiIsRegistered(chassi);

      const verifyRenavanIsRegistered = await vehiclesRepository.verifyIfRenavanIsRegistered(renavan);

      if (verifyPlateIsRegistered) {

        throw new AppError(
          'Placa não disponível!!!',
          400,
        );
      }

      if (verifyChassiIsRegistered) {
        throw new AppError(
          'Chassi não disponível!!!',
          400,
        )
      }

      if (verifyRenavanIsRegistered) {
        throw new AppError(
          'Renavam não disponível!!!',
          400,
        )
      }

      if (modelYear.length !== 4) {
        throw new AppError(
          'Campo "ano do modelo" deve ter 4 caractéres!!!',
          400,
        );
      }
      console.log(maker)
      if (maker.length < 1) {
        console.log("hm")
        throw new AppError(
          'Campo "fabricante" deve ter pelo menos 1 caractér!!!',
          400,
        );
      }
      if (model.length < 1) {
        throw new AppError(
          'Campo "modelo" deve ter pelo menos 1 caractér!!!',
          400,
        );
      }
      if (plate.length < 7) {
        throw new AppError(
          'Campo "placa" deve ter no mínimo 7 e no máximo 8 caractéres!!!',
          400,
        );
      }
      if (renavan.length !== 11) {
        throw new AppError('Campo "renavam" deve ter 11 caractéres!!!', 400);
      }
      if (chassi.length !== 17) {
        throw new AppError('Campo "chassi" deve ter 17 caractéres!!!', 400);
      }
      console.log("dokpsa");


      await vehiclesRepository.update(id, {
        modelYear,
        maker,
        model,
        plate,
        renavan,
        chassi
      })

      const vehicle = {
        modelYear,
        maker,
        model,
        plate,
        renavan,
        chassi,
        id,
      }
      return vehicle;

    } catch (err: any) {

      return err;
    }
  }
}
export default UpdateVehicleService;
