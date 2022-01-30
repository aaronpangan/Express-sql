import { createConnection } from 'typeorm';
import dotenv from 'dotenv';
import {
  CustomerDetails,
  CustomerAuth,
  CustomerVerification,
} from '../customer/model/customerDetails.model';
dotenv.config();

export const db_connect = () => {
  createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: process.env.db_username,
    password: process.env.db_password,
    database: process.env.db_database,
    entities: [CustomerAuth, CustomerDetails, CustomerVerification],
    synchronize: true, // false if production
  })
    .then(() => console.log('Database Connected Successfully'))
    .catch((error) => console.log(error));
};
