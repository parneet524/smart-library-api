// tests/__mocks__/firebase.ts

// Very simple Firestore mock for tests
export const db = {
  collection: () => ({
    add: async (data: any) => ({ id: "mock-id" }), // data is `any` on purpose
    get: async () => ({ docs: [] as any[] }),
    doc: () => ({
      get: async () => ({ exists: true, data: () => ({}) }),
      update: async () => {},
      delete: async () => {},
    }),
  }),
};

export const shutdownFirestore = async () => {
  return true; // pretend it shut down
};
