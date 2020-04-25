import Joi from '@hapi/joi';

export type JoiOut = Joi.StringSchema | Joi.BooleanSchema | Joi.NumberSchema | Joi.DateSchema;