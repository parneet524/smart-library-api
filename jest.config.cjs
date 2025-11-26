module.exports = {
  testTimeout: 30000,
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/src", "<rootDir>/tests"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      lines: 65
    },
  },

   
  setupFilesAfterEnv: ["<rootDir>/tests/setup.ts"],

  moduleNameMapper: {
    "^../src/config/firebase$": "<rootDir>/tests/__mocks__/firebase.ts",
  },
};


