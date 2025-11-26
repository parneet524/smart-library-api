import Joi from "joi";

export const createMemberSchema = Joi.object({
  name: Joi.string().min(1).required(),
  email: Joi.string().email().required(),
  isActive: Joi.boolean().default(true)
});

export const updateMemberSchema = Joi.object({
  name: Joi.string().min(1),
  email: Joi.string().email(),
  isActive: Joi.boolean()
});
