import { Router } from "express";
import { validate } from "../middleware/validate";
import { createBorrowSchema } from "../validation/borrow.schema";
import * as controller from "../controllers/borrow.controller";

export const router = Router();

// POST /api/v1/borrow  → create borrow record
router.post("/", validate(createBorrowSchema), controller.createBorrow);

// GET /api/v1/borrow?memberId=abc → list records (all or by member)
router.get("/", controller.listBorrowRecords);

// GET /api/v1/borrow/:id   → single borrow record
router.get("/:id", controller.getBorrow);

// PATCH /api/v1/borrow/:id/return → mark returned
router.patch("/:id/return", controller.returnBook);
