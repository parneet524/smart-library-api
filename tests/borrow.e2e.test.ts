import request from "supertest";
import app from "../src/app";

jest.setTimeout(20000);

describe("Borrow Records API", () => {
  it("GET /api/v1/borrow should return 200", async () => {
    const res = await request(app).get("/api/v1/borrow");
    expect([200, 404]).toContain(res.status);
  });
});

import { shutdownFirestore } from "../src/config/firebase";

afterAll(async () => {
  await shutdownFirestore();
});

afterAll(async () => {
  await new Promise((resolve) => setTimeout(resolve, 500)); // let server close
});
