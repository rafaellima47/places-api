import { join } from 'path';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'dotenv/config'

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.DB_HOST || 'db',
        port: parseInt(process.env.DB_PORT) || 5433,
        username: process.env.DB_USERNAME || 'test',
        password: process.env.DB_PASSWORD || 'test',
        database: process.env.DB_NAME || 'test',
        entities: [join(__dirname, '**', '*.entity.{ts,js}')],
        synchronize: true,
      })
  ],
  controllers: [],
  providers: [],
})
export class DatabaseModule {}
