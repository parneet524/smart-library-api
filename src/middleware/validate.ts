import { Request, Response, NextFunction } from "express";

export function validate(schema: any) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true
    });

    if (error) {
      return res.status(400).json({
        message: "Validation failed",
        details: error.details.map((d: any) => d.message)
      });
    }

    req.body = value;
    next();
  };
}
