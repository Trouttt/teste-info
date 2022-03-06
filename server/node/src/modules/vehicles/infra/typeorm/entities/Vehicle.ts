import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import IVehicle from '../../../entities/IVehicles';

@Entity(`vehicles`)
class Vehicle implements IVehicle{
    @PrimaryGeneratedColumn(`uuid`)
    id!: string;

    @Column()
    modelYear!: string;

    @Column()
    maker!: string;

    @Column()
    model!: string;

    @Column()
    plate!: string;

    @Column()
    renavan!: string;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

    @Column()
    chassi?: string;

}
export default Vehicle;
