import { Product } from 'src/products/entities/product.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  phoneNumber: string;

  @Column()
  governorate: string;

  @Column()
  deleation: string;

  @Column()
  zipCode: number;

  @Column()
  addressDescription: string;

  @Column({ nullable: true })
  note: string;

  @Column()
  totalPrice: number;

  @ManyToMany(() => Product)
  @JoinTable()
  products: Product[];
}
