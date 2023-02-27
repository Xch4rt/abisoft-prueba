import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { PlatesCrudModule } from './plates_crud/plates_crud.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    PlatesCrudModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
