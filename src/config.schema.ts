import * as Joi from '@hapi/joi';

export const configValidationschema = Joi.object({
  DB_HOST: Joi.string().required(),
  DB_DATABASE: Joi.string().required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_PORT: Joi.number().default(5432).required(),
});
