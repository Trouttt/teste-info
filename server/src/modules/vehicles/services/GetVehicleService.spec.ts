import assert from 'assert';
import GetVehicleByIdService from './GetVehicleService';

const makeSut = () => {
  return new GetVehicleByIdService();
};

describe('vehicle get by id service', () => {
  it('Should return 400 and message if no uuid is provided or invalid', async () => {
    const sut = makeSut();

    const httpRequest = {
      id: '3123',
    };

    const httpResponse = await sut.execute(httpRequest);

    assert.deepEqual(httpResponse, {
      message: 'UUID inválido!!!',

      statusCode: 400,
    });
  });
});
