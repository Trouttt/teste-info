import assert from 'assert';

import DeleteVehicleService from './DeleteVehicleService';

const makeSut = () => {

  return new DeleteVehicleService();

};

describe('vehicle delete service', () => {

  it('Should return 400 and message if no uuid is provided or invalid', async () => {

    const sut = makeSut();

    const httpRequest = {

      id: '3123',

    };

    const httpResponse = await sut.execute(httpRequest);

    assert.deepEqual(httpResponse, {

      message: 'Id inválido!!!',

      statusCode: 400,

    });

  });

  it('Should return 400 and message if no vehicle is founded', async () => {

    const sut = makeSut();

    const httpRequest = {

      id: '378866df-27e0-4b13-abd2-fa0a3967aa6e',

    };

    const httpResponse = await sut.execute(httpRequest);

    assert.deepEqual(httpResponse, {

      message: 'O veículo não existe!!!',

      statusCode: 400,

    });

  });

});
