import * as repo from "../../src/repositories/members.repo";
import * as service from "../../src/services/members.service";

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
