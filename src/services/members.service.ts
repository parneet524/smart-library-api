import * as repo from "../repositories/members.repo";

/**
 * Create a new member.
 */
export async function createMember(data: repo.Member) {
  const normalized: repo.Member = {
    ...data,
    email: data.email.toLowerCase()
  };
  return repo.createMember(normalized);
}

/**
 * List all members (unsorted)
 */
export function listMembers() {
  return repo.getAllMembers();
}

/**
 * SORT members if needed
 */
export async function listMembersSorted(sort?: string) {
  let members = await repo.getAllMembers();

  if (sort === "name") {
    members = members.sort((a, b) => a.name.localeCompare(b.name));
  }

  return members;
}

/**
 * Get a single member by Firestore ID
 */
export function getMember(id: string) {
  return repo.getMemberById(id);
}

/**
 * Update member data by ID
 */
export function updateMember(id: string, data: Partial<repo.Member>) {
  if (data.email) {
    data.email = data.email.toLowerCase();
  }
  return repo.updateMember(id, data);
}

/**
 * Delete member by ID
 */
export function removeMember(id: string) {
  return repo.deleteMember(id);
}

