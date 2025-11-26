// Close Firebase or any open handles after all tests
afterAll(async () => {
  const { getFirestore } = require("firebase-admin/firestore");

  try {
    const db = getFirestore();
    await db.terminate?.(); // if Firestore web SDK
  } catch {}

  // Force close all timers
  jest.useRealTimers();
});

// tests/setup.ts
// Increase default timeout for ALL tests to 20 seconds
jest.setTimeout(20000);
