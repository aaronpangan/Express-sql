import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
} from 'typeorm';
import { CustomerAuth } from './customerAuth.model';

@Entity()
export class CustomerVerification extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => CustomerAuth, (auth) => auth.verificationCode)
  customer: CustomerAuth;

  @Column()
  verificationCode: number;
}
