import 'reflect-metadata';
import { getRepository } from 'typeorm';
import AppError from '../../../shared/error/AppError';
import ICreateVehicleDTO from '../dtos/ICreateVehicleDTO';
import Vehicle from '../infra/typeorm/entities/Vehicle';
class CreateVehicleService{
  public async execute({
    modelYear,
    maker,
    model,
    plate,
    renavan,
    chassi = '',
  }: ICreateVehicleDTO): Promise<Vehicle | AppError> {
    try {
      const vehiclesRepository = await getRepository(Vehicle);

      const checkVehicleExists = await vehiclesRepository.findOne({
        where: {plate}
      })

      if (checkVehicleExists) {
        throw new AppError(
          'O carro já está cadastrado!!!',
          400,
        );
      }

      if (modelYear.length !== 4) {
        throw new AppError(
          'Campo "ano do modelo" deve ter 4 caractéres!!!',
          400,
        );
      }
      if (maker.length < 1) {
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
      if (plate.length < 7 || plate.length > 8) {
        throw new AppError(
          'Campo "placa" deve ter no mínimo 7 e no máximo 8 caractéres!!!',
          400,
        );
      }
      if (renavan.length !== 11) {
        throw new AppError('Campo "renavam" deve ter 11 caractéres!!!', 400);
      }
      if (chassi?.length > 0 && chassi?.length !== 17) {
        throw new AppError('Campo "chassi" deve ter 17 caractéres!!!', 400);
      }

      const vehicle = await vehiclesRepository.create({
        modelYear,
    maker,
    model,
    plate,
    renavan,
    chassi
      })
      return vehicle;
    } catch (err: any) {
      return err;
    }
  }
}
export default CreateVehicleService;
