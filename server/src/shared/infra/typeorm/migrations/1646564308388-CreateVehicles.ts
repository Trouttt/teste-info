import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateVehicles1646564308388 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(
      new Table({
        name: 'vehicles',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'plate',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'chassi',
            type: 'varchar',
            isNullable: true,
            isUnique: true,
          },
          {
            name: 'renavan',
            type: 'varchar',
            isNullable: true,
            isUnique: true,
          },
          {
            name: 'model',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'maker',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'modelYear',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('vehicles');
  }
}
