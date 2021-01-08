import {MigrationInterface, QueryRunner} from "typeorm";
import fs = require('fs');


export class initTestMigration1577044051598 implements MigrationInterface {
   
    name = 'initTestMigration1577044051598';

    public async up(queryRunner: QueryRunner): Promise<any> {
        const distance = fs.readFileSync("src/migration/distance.sql").toString();
        const band = fs.readFileSync("src/migration/band.sql").toString();
        const venue = fs.readFileSync("src/migration/venue.sql").toString();
        const concert = fs.readFileSync("src/migration/concert.sql").toString();
        await queryRunner.query(distance, undefined);
        //await queryRunner.query("DROP TABLE IF EXISTS concert CASCADE", undefined);    
         await queryRunner.query("truncate band RESTART IDENTITY CASCADE", undefined);      
         await queryRunner.query("truncate venue RESTART IDENTITY CASCADE", undefined);     
         await queryRunner.query(band, undefined);
         await queryRunner.query(venue, undefined);
         await queryRunner.query(concert, undefined);
     
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP FUNCTION "calculate_distance"`, undefined);
    }

}