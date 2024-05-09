import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    private readonly productsService: ProductsService,
  ) {}
  async create(createOrderDto: CreateOrderDto) {
    const { productIds, ...orderInfo } = createOrderDto;
    const order = this.orderRepository.create(orderInfo);
    const products = await this.productsService.findProductsByIds(productIds);
    order.products = products;

    return await this.orderRepository.save(order);
  }
}
