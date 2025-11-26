import { validate } from "../../src/middleware/validate";
import Joi from "joi";

describe("validate middleware", () => {
  test("should call next() when validation passes", () => {
    const schema = Joi.object({ name: Joi.string().required() });
    const req: any = { body: { name: "Parneet" } };
    const res: any = {};
    const next = jest.fn();

    validate(schema)(req, res, next);

    expect(next).toHaveBeenCalled();
  });

  test("should return 400 when validation fails", () => {
    const schema = Joi.object({ name: Joi.string().required() });
    const req: any = { body: {} };
    const json = jest.fn();
    const status = jest.fn(() => ({ json }));
    const res: any = { status };
    const next = jest.fn();

    validate(schema)(req, res, next);

    expect(status).toHaveBeenCalledWith(400);
    expect(json).toHaveBeenCalled();
  });
});
