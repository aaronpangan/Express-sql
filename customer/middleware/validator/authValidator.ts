import Ajv from 'ajv';
import { Request, Response, NextFunction } from 'express';
const ajv = new Ajv();

const registerSchema = {
  type: 'object',
  properties: {
    fname: { type: 'string' },
    age: { type: 'integer' },
  },
  required: ['fname'],
  additionalProperties: false,
};

export function registerValidator(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const isValid = ajv.validate(registerSchema, req.body);
  if (!isValid) console.log(ajv.errors);

  next();
}
