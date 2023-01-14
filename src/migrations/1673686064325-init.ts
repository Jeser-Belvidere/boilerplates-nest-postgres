import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1673686064325 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      //QSL query :`ALTER TABLE "users" RENAME COLUMN "firstname" TO "username"`
      ``,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      //QSL query :`ALTER TABLE "users" RENAME COLUMN "username" TO "firstname"`
      ``,
    );
  }
}
