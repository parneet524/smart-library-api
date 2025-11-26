import { validate } from "../../src/middleware/validate";

describe("validate middleware", () => {
  test("calls next() when schema is valid", () => {
    const schema = {
      // fake Joi-like object
      validate: jest.fn().mockReturnValue({
        error: null,
        value: { title: "Clean", author: "Me" }
      })
    };

    const req: any = { body: { title: "Clean", author: "Me" } };
    const res: any = {};
    const next = jest.fn();

    const middleware = validate(schema as any);
    middleware(req, res, next);

    expect(schema.validate).toHaveBeenCalled();
    expect(req.body).toEqual({ title: "Clean", author: "Me" });
    expect(next).toHaveBeenCalled();
  });

  test("returns 400 when schema fails", () => {
    const schema = {
      validate: jest.fn().mockReturnValue({
        error: {
          details: [{ message: '"title" is required' }]
        },
        value: {}
      })
    };

    const req: any = { body: {} };
    const res: any = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = jest.fn();

    const middleware = validate(schema as any);
    middleware(req, res, next);

    expect(schema.validate).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: "Validation failed",
      details: ['"title" is required']
    });
    expect(next).not.toHaveBeenCalled();
  });
});
