import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CustomerAuth } from './customerAuth.model';

export enum AddressLabel {
  HOME = 'home',
  WORK = 'work',
}

@Entity()
export class CustomerAddress extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  full_name: string;

  @Column()
  phone_number: number;

  @Column()
  region_province: string;

  @Column()
  postal_code: number;

  @Column()
  street: string;

  @Column({ default: AddressLabel.HOME })
  label: AddressLabel;

  @ManyToOne(() => CustomerAuth, (auth) => auth.address)
  customer: CustomerAuth;
}
