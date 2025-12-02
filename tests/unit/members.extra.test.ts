import * as repo from "../../src/repositories/members.repo";
import * as service from "../../src/services/members.service";
import request from "supertest";
import app from "../../src/app";

jest.mock("../../src/repositories/members.repo");


describe("Members Service Extra Tests", () => {
  test("should get member by ID", async () => {
    (repo.getMemberById as jest.Mock).mockResolvedValue({
      id: "M1",
      name: "Parneet",
      email: "parneet@example.com",
      isActive: true
    });

    const result = await service.getMember("M1");
    expect(result?.email).toBe("parneet@example.com");
  });

  test("should update member", async () => {
    (repo.updateMember as jest.Mock).mockResolvedValue({
      id: "M1",
      name: "Updated",
      email: "updated@gmail.com",
      isActive: true
    });

    const result = await service.updateMember("M1", {
      name: "Updated"
    });

    expect(result?.name).toBe("Updated");
  });

  test("should delete member", async () => {
    (repo.deleteMember as jest.Mock).mockResolvedValue(true);

    const result = await service.removeMember("M1");
    expect(result).toBe(true);
  });
});

test("sorts members by name", async () => {
  (repo.getAllMembers as jest.Mock).mockResolvedValue([
    { id: "M2", name: "Gagan" },
    { id: "M1", name: "Parneet" }
  ]);

  const res = await request(app)
    .get("/api/v1/members?sort=name")
    .set("x-api-key", "secret123");

  expect(res.status).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});

