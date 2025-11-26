import { Router } from "express";
import * as controller from "../controllers/members.controller";
import { validate } from "../middleware/validate";
import {
  createMemberSchema,
  updateMemberSchema
} from "../validation/member.schema";

export const router = Router();

router.post("/", validate(createMemberSchema), controller.createMember);
router.get("/", controller.listMembers);
router.get("/:id", controller.getMember);
router.patch("/:id", validate(updateMemberSchema), controller.updateMember);
router.delete("/:id", controller.deleteMember);
