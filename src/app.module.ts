import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      database: 'minyarns',
      synchronize: true,
      autoLoadEntities: true,
    }),
    ProductsModule,
    OrdersModule,
  ],
})
export class AppModule {}
