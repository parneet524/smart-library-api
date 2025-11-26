import Joi from "joi";

export const createBorrowSchema = Joi.object({
  bookId: Joi.string().required(),
  memberId: Joi.string().required(),
  
  dueAt: Joi.string().isoDate().optional()
});
