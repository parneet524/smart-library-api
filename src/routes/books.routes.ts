import { Router } from "express";
import { validate } from "../middleware/validate";
import { createBookSchema, updateBookSchema } from "../validation/book.schema";
import * as controller from "../controllers/books.controller";

export const router = Router();

router.post("/", validate(createBookSchema), controller.createBook);
router.get("/", controller.listBooks);
router.get("/:id", controller.getBook);
router.patch("/:id", validate(updateBookSchema), controller.updateBook);
router.delete("/:id", controller.deleteBook);
