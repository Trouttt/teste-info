/* eslint-disable prettier/prettier */
import assert from 'assert';
import { createConnections, getConnection } from 'typeorm';
import AppError from '../../../shared/error/AppError';
import ICreateVehicleDTO from '../dtos/ICreateVehicleDTO';
import IVehicle from '../entities/IVehicles';

class CreateVehicleService {
  public async execute({
    modelYear,
    maker,
    model,
    plate,
    renavan,
    chassi = '',
  }: ICreateVehicleDTO): Promise<IVehicle | AppError> {
    try {
      if (modelYear.length !== 4) {
        throw new AppError('Campo "ano do modelo" deve ter 4 caractéres!!!', 400);
      }
      if (model.length < 1) {
        throw new AppError('Campo "modelo" deve ter pelo menos 1 caractér!!!', 400);
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

      const vehicle = {
        model,
        maker,
        plate,
        modelYear,
        renavan,
        chassi,
        id: 'fkopsafkopas',
      };
      return vehicle;
    } catch (err) {
      return err;
    }
  }
}

const makeSut = () => {
  return new CreateVehicleService();
};

describe('Vehicle Register Service', () => {

  it('Should return error if the modelYear is different than 4 characteres', async () => {
    const sut = makeSut();
    const httpRequest = {
      modelYear: '20255',
      maker: 'Chevete',
      model: 'aro 90',
      plate: 'AJJ1314',
      renavan: '12345678910',
      chassi: '',
    };
    const httpResponse = await sut.execute(httpRequest);

    assert.deepEqual(
      httpResponse,
      new AppError('Campo "ano do modelo" deve ter 4 caractéres!!!', 400),
    );
  });
  it('Should return error if the model is less than 1 characteres', async () => {
    const sut = makeSut();
    const httpRequest = {
      modelYear: '2025',
      maker: 'Chevete',
      model: '',
      plate: 'AJJ1314',
      renavan: '12345678910',
      chassi: '',
    };
    const httpResponse = await sut.execute(httpRequest);

    assert.deepEqual(
      httpResponse,
      new AppError('Campo "modelo" deve ter pelo menos 1 caractér!!!', 400),
    );
  });


  it('Should return error if the plate is less than 7 or more than 8 characters', async () => {
    const sut = makeSut();
    const httpRequest = {
      modelYear: '2021',
      maker: 'Chevete',
      model: 'aro 90',
      plate: '412',
      renavan: '12345678910',
      chassi: '9BRBLWHEXGO107721',
    };
    const httpResponse = await sut.execute(httpRequest);


    assert.deepEqual(
      httpResponse,
      new AppError('Campo "placa" deve ter no mínimo 7 e no máximo 8 caractéres!!!', 400),
    );
  });

  it('Should return error if the renavan is different than 11 characteres', async () => {
    const sut = makeSut();
    const httpRequest = {
      modelYear: '2025',
      maker: 'Chevete',
      model: 'aro 90',
      plate: 'AJJ1314',
      renavan: '12345678',
      chassi: '',
    };
    const httpResponse = await sut.execute(httpRequest);

    assert.deepEqual(
      httpResponse,
      new AppError('Campo "renavam" deve ter 11 caractéres!!!', 400),
    );
  });
  it('Should return error if the chassi is more than 0 and different than 17', async () => {
    const sut = makeSut();
    const httpRequest = {
      modelYear: '2021',
      maker: 'Chevete',
      model: 'aro 90',
      plate: 'AJJ1314',
      renavan: '12345678910',
      chassi: '123',
    };
    const httpResponse = await sut.execute(httpRequest);

    assert.deepEqual(
      httpResponse,
      new AppError('Campo "chassi" deve ter 17 caractéres!!!', 400),
    );
  });
});
