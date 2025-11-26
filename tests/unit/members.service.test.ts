import * as repo from "../../src/repositories/members.repo";
import * as service from "../../src/services/members.service";

jest.mock("../../src/repositories/members.repo");

describe("Members Service", () => {
  test("should return all members", async () => {
    (repo.getAllMembers as jest.Mock).mockResolvedValue([
      { id: "1", name: "Test", email: "t@test.com", isActive: true }
    ]);

    const result = await service.listMembers();

    expect(result.length).toBe(1);
    expect(result[0].name).toBe("Test");
  });

  test("should create a member", async () => {
    (repo.createMember as jest.Mock).mockResolvedValue({
      id: "123",
      name: "Parneet",
      email: "p@test.com",
      isActive: true
    });

    const result = await service.createMember({
      name: "Parneet",
      email: "P@Test.com",
      isActive: true
    });

    expect(result.id).toBe("123");
    expect(result.email).toBe("p@test.com"); // lowercased by service
  });
});
