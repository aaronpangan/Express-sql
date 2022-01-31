

import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,

    OneToMany,
  } from 'typeorm';
import { CustomerAddress } from './customerAddress.model';
import { CustomerVerification } from './customerVerification.model';

@Entity()
@Unique(['email'])
export class CustomerAuth extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'boolean', default: false })
  isVerified: boolean;

  @OneToMany(
    () => CustomerVerification,
    (customerVerification) => customerVerification.customer,
  )
  verificationCode: CustomerVerification[];

  @OneToMany(
    () => CustomerAddress,
    (customerAddress) => customerAddress.customer,
  )
  address: CustomerAddress[];
}
