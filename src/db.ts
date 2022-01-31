import { createConnection } from 'typeorm';
import dotenv from 'dotenv';
import { CustomerAddress } from '../customer/model/customerAddress.model';
import { CustomerAuth } from '../customer/model/customerAuth.model';
import { CustomerDetails } from '../customer/model/customerDetails.model';
import { CustomerVerification } from '../customer/model/customerVerification.model';

dotenv.config();

export const db_connect = () => {
  createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: process.env.db_username,
    password: process.env.db_password,
    database: process.env.db_database,
    entities: [
      CustomerAuth,
      CustomerDetails,
      CustomerVerification,
      CustomerAddress,
    ],
    synchronize: true, // false if production
  })
    .then(() => console.log('Database Connected Successfully'))
    .catch((error) => console.log(error));
};
