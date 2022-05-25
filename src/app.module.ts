import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { HttpModule } from '@nestjs/axios';
import { AuthService } from './auth/auth.service';
import { OrdersController } from './orders/orders.controller';
import { OrdersService } from './orders/orders.service';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule
  ],
  controllers: [
    AppController, 
    AuthController, 
    OrdersController
  ],
  providers: [
    AppService,
    AuthService,
    OrdersService
  ],
})
export class AppModule {}
