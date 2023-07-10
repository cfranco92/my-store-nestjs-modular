import { CustomerController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';
import { Module } from '@nestjs/common';
import { ProductsModule } from './../products/products.module';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';

@Module({
  imports: [ProductsModule],
  controllers: [CustomerController, UsersController],
  providers: [CustomersService, UsersService],
})
export class UsersModule {}
