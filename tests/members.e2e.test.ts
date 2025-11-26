import request from "supertest";
import app from "../src/app";

jest.setTimeout(20000);

describe("Members API", () => {
  it("GET /api/v1/members should return 200", async () => {
    const res = await request(app).get("/api/v1/members");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

import { shutdownFirestore } from "../src/config/firebase";

afterAll(async () => {
  await shutdownFirestore();
});

afterAll(async () => {
  await new Promise((resolve) => setTimeout(resolve, 500)); // let server close
});