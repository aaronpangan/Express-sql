import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { CustomerAuth } from './customerAuth.model';

@Entity()
export class CustomerDetails extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ type: 'date', nullable: true })
  birthdate: Date;

  @OneToOne(() => CustomerAuth)
  @JoinColumn()
  customer: CustomerAuth;
}
