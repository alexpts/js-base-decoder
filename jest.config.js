/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  cacheDirectory: "tests/cache",
  collectCoverageFrom: [
    "src/**"
  ],
  "coverageDirectory": "tests/coverage",
  "maxConcurrency": 5,

  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,
}
