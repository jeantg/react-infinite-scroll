/* eslint-disable no-undef */
module.exports = {
  // bail: 1,
  roots: ["<rootDir>"],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/"
  ],
  transformIgnorePatterns: [
    "<rootDir>/node_modules/",
  ],
  testEnvironment: "jsdom",
  transform: {
    ".+\\.(ts|tsx)$": "ts-jest",
  }
};
