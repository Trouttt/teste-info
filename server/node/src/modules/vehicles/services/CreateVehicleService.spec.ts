/* eslint-disable prettier/prettier */
import assert from 'assert';
import { createConnections, getConnection, getCustomRepository } from 'typeorm';
import AppError from '../../../shared/error/AppError';
import CreateVehicleService from './CreateVehicleService';



before(async () => {
  await createConnections();
});

after(async () => {
  const defaultConnection = getConnection('default');
  await defaultConnection.close();
});
const makeSut = () => {
  return new CreateVehicleService();
};

describe('Vehicle Register Service', () => {
  it('Should return error if the plate is already registered', async () => {
    const sut = makeSut();
    const httpRequest = {
      modelYear: '2025',
      maker: 'teste',
      model: 'aro 90',
      plate: '1234567',
      chassi: '12345678910123456',
      renavan: '12345678910',

    };


    const httpResponse = await sut.execute(httpRequest);

    assert.deepEqual(
      httpResponse,
      new AppError('O carro já está cadastrado!!!', 400),
    );
  });
  it('Should return error if the chassi is already registered', async () => {
    const sut = makeSut();
    const httpRequest = {
      modelYear: '2025',
      maker: 'teste',
      model: 'aro 90',
      plate: '111117',
      chassi: '12345678910123456',
      renavan: '19235511132',

    };


    const httpResponse = await sut.execute(httpRequest);

    assert.deepEqual(
      httpResponse,
      new AppError('O chassi já está cadastrado!!!', 400),
    );
  });
  it('Should return error if the renavan is already registered', async () => {
    const sut = makeSut();
    const httpRequest = {
      modelYear: '2025',
      maker: 'teste',
      model: 'aro 90',
      plate: '2171115',
      chassi: '33355674419234562',
      renavan: '19235511132',
    };


    const httpResponse = await sut.execute(httpRequest);

    assert.deepEqual(
      httpResponse,
      new AppError('O renavan já está cadastrado!!!', 400),
    );
  });

  it('Should return error if the modelYear is different than 4 characteres', async () => {
    const sut = makeSut();
    const httpRequest = {
      modelYear: '20255',
      maker: 'teste',
      model: 'aro 90',
      plate: 'abcdefg',
      renavan: '14455566678',
      chassi: '17777678910123456',
    };
    const httpResponse = await sut.execute(httpRequest);

    assert.deepEqual(
      httpResponse,
      new AppError('Campo "ano do modelo" deve ter 4 caracteres!!!', 400),
    );
  });

  it('Should return error if the maker is less than 1 characteres', async () => {
    const sut = makeSut();
    const httpRequest = {
      modelYear: '2025',
      maker: '',
      model: '',
      plate: 'AJJ1314',
      renavan: '12345618910',
      chassi: '12345678910123886',
    };
    const httpResponse = await sut.execute(httpRequest);

    assert.deepEqual(
      httpResponse,
      new AppError('Campo "fabricante" deve ter pelo menos 1 carácter!!!', 400),
    );
  });
  it('Should return error if the model is less than 1 characteres', async () => {
    const sut = makeSut();
    const httpRequest = {
      modelYear: '2025',
      maker: 'teste',
      model: '',
      plate: 'AJJ1314',
      renavan: '12115678910',
      chassi: '12555678910123456',
    };
    const httpResponse = await sut.execute(httpRequest);

    assert.deepEqual(
      httpResponse,
      new AppError('Campo "modelo" deve ter pelo menos 1 carácter!!!', 400),
    );
  });


  it('Should return error if the plate is less than 7 or more than 8 characters', async () => {
    const sut = makeSut();
    const httpRequest = {
      modelYear: '2021',
      maker: 'teste',
      model: 'aro 90',
      plate: '412',
      renavan: '16645678910',
      chassi: '12315678910123456',
    };
    const httpResponse = await sut.execute(httpRequest);


    assert.deepEqual(
      httpResponse,
      new AppError('Campo "placa" deve ter no mínimo 7 e no máximo 8 caracteres!!!', 400),
    );
  });

  it('Should return error if the renavan is different than 11 characteres', async () => {
    const sut = makeSut();
    const httpRequest = {
      modelYear: '2025',
      maker: 'teste',
      model: 'aro 90',
      plate: 'AJJ1314',
      renavan: '12345678',
      chassi: '12345671910123456',
    };
    const httpResponse = await sut.execute(httpRequest);

    assert.deepEqual(
      httpResponse,
      new AppError('Campo "renavam" deve ter 11 caracteres!!!', 400),
    );
  });
  it('Should return error if the chassi is different than 17', async () => {
    const sut = makeSut();
    const httpRequest = {
      modelYear: '2021',
      maker: 'teste',
      model: 'aro 90',
      plate: 'AJJ1314',
      renavan: '12345678901',
      chassi: '123',
    };
    const httpResponse = await sut.execute(httpRequest);

    assert.deepEqual(
      httpResponse,
      new AppError('Campo "chassi" deve ter 17 caracteres!!!', 400),
    );
  });
});
