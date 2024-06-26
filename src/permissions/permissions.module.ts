import { Module } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { PermissionsController } from './permissions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permissions } from './entities/permission.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Permissions]), // Importar si se utiliza TypeORM
  ],
  controllers: [PermissionsController],
  providers: [PermissionsService],
})
export class PermissionsModule {}
