import { Request, Response } from "express";
import * as service from "../services/members.service";

export async function createMember(req: Request, res: Response) {
  const member = await service.createMember(req.body);
  res.status(201).json(member);
}

export async function listMembers(req: Request, res: Response) {
  const sort = req.query?.sort as string | undefined;

  let members = await service.listMembers();

  if (sort === "name") {
    members = [...members].sort((a, b) => a.name.localeCompare(b.name));
  }

  res.json(members);
}

export async function getMember(req: Request, res: Response) {
  const member = await service.getMember(req.params.id);
  if (!member) {
    return res.status(404).json({ message: "Member not found" });
  }
  res.json(member);
}

export async function updateMember(req: Request, res: Response) {
  const updated = await service.updateMember(req.params.id, req.body);
  if (!updated) {
    return res.status(404).json({ message: "Member not found" });
  }
  res.json(updated);
}

export async function deleteMember(req: Request, res: Response) {
  const ok = await service.removeMember(req.params.id);
  if (!ok) {
    return res.status(404).json({ message: "Member not found" });
  }
  res.status(204).send();
}
