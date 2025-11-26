import Joi from "joi";

export const createBookSchema = Joi.object({
  title: Joi.string().min(1).required(),
  author: Joi.string().min(1).required(),
  genre: Joi.string().min(1).required(),
  availableCopies: Joi.number().integer().min(0).required()
});

export const updateBookSchema = Joi.object({
  title: Joi.string(),
  author: Joi.string(),
  genre: Joi.string(),
  availableCopies: Joi.number().integer().min(0)
});
