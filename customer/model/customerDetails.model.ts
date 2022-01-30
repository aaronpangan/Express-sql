import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToOne,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

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

  @OneToMany(() => CustomerVerification, (emailCode) => emailCode.customer)
  verificationCode: CustomerVerification[];
}

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

@Entity()
export class CustomerVerification extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => CustomerAuth, (auth) => auth.verificationCode)
  customer: CustomerAuth;

  @Column()
  verificationCode: number;
}
