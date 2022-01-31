import express from 'express';
import { register } from '../../../customer/controller/customerAuth.controller';
import { registerValidator } from '../../../customer/middleware/validator/authValidator';

const router = express.Router();

router.post('/register', [registerValidator], register);

export default router;
