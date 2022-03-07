import { EntityRepository, Repository } from "typeorm";
import Vehicle from "../infra/typeorm/entities/Vehicle";


@EntityRepository(Vehicle)
class VehiclesRepository extends Repository<Vehicle>{
  public async findVehicleByPlate(plate: string): Promise<Vehicle | undefined > {
    const findVehicle = await this.findOne({
      where: { plate }
    })
    return findVehicle
  }
  public async verifyIfChassiIsRegistered(chassi: string): Promise<Vehicle | undefined | boolean> {
    const vehicleWithChassi = await this.findOne({
      where: { chassi }
    })

    if(vehicleWithChassi) return true
    else false

  }
  public async verifyIfRenavanIsRegistered(renavan: string): Promise<Vehicle | undefined | boolean> {
    const vehicleWithRenavan = await this.findOne({
      where: { renavan }
    })
    if(vehicleWithRenavan) return true
    else false
  }
}
export default VehiclesRepository;
