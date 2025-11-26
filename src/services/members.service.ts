import * as repo from "../repositories/members.repo";

/**
 * Create a new member.
 */
export async function createMember(data: repo.Member) {
  // small example rule: normalize email
  const normalized: repo.Member = {
    ...data,
    email: data.email.toLowerCase()
  };
  return repo.createMember(normalized);
}

/**
 * List all members.
 */
export function listMembers() {
  return repo.getAllMembers();
}

/**
 * Get a single member by Firestore ID.
 */
export function getMember(id: string) {
  return repo.getMemberById(id);
}

/**
 * Update member data by ID.
 */
export function updateMember(id: string, data: Partial<repo.Member>) {
  if (data.email) {
    data.email = data.email.toLowerCase();
  }
  return repo.updateMember(id, data);
}

/**
 * Delete member by ID.
 */
export function removeMember(id: string) {
  return repo.deleteMember(id);
}
