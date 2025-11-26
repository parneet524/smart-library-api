jest.mock("../src/config/firebase", () => {
  return {
    db: {
      collection: () => ({
        add: async (data: any) => ({ id: "test-id" }),
        get: async () => ({ docs: [] }),
        doc: () => ({
          get: async () => ({ exists: true, data: () => ({}) }),
          update: async () => {},
          delete: async () => {},
        }),
      }),
    },
  };
});

import request from "supertest";
import app from "../src/app";

describe("Smart Library API", () => {
  it(
    "GET /health should return status ok",
    async () => {
      const res = await request(app).get("/health");

      expect(res.status).toBe(200);
      expect(res.body).toEqual({ status: "ok" });
    },
    20000 // <-- per-test timeout
  );

  it(
    "GET /api/v1/books should return 200 and an array",
    async () => {
      const res = await request(app).get("/api/v1/books");

      expect(res.status).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
    },
    20000 // <-- per-test timeout
  );
});
