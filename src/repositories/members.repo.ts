import { db } from "../config/firebase";

const collection = db.collection("members");

export interface Member {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  isActive: boolean;
}

export async function createMember(data: Member): Promise<Member> {
  const docRef = await collection.add(data);
  return { id: docRef.id, ...data };
}

export async function getAllMembers(): Promise<Member[]> {
  const snap = await collection.get();
  return snap.docs.map(d => ({ id: d.id, ...d.data() } as Member));
}

export async function getMemberById(id: string): Promise<Member | null> {
  const doc = await collection.doc(id).get();
  if (!doc.exists) return null;
  return { id: doc.id, ...doc.data() } as Member;
}

export async function updateMember(
  id: string,
  data: Partial<Member>
): Promise<Member | null> {
  const ref = collection.doc(id);
  const doc = await ref.get();
  if (!doc.exists) return null;

  await ref.update(data);
  const updated = await ref.get();
  return { id: updated.id, ...updated.data() } as Member;
}

export async function deleteMember(id: string): Promise<boolean> {
  const ref = collection.doc(id);
  const doc = await ref.get();
  if (!doc.exists) return false;

  await ref.delete();
  return true;
}
