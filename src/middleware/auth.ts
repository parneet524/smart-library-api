import { Request, Response, NextFunction } from "express";

export function requireApiKey(req: Request, res: Response, next: NextFunction) {
  if (process.env.NODE_ENV === "test") {
    return next();
  }

  if (req.headers["x-api-key"] !== "secret123") {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
}
