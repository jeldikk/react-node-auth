/** @type {import('jest').Config} */

const config = {
    verbose: true,
    preset: "@shelf/jest-mongodb",
    rootDir: ".",
    watchPathIgnorePatterns: [
      "<rootDir>/dist/",
      "<rootDir>/node_modules/",
      "<rootDir>/globalConfig.json",
    ]
};
  
module.exports = config;