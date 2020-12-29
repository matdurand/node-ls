module.exports = {
  setupFiles: ['./test-setup.ts'],
  runner: 'groups',
  moduleFileExtensions: ['js', 'json', 'ts'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  moduleNameMapper: {
    '@node-ls/core': '<rootDir>/libs/core/src',
  },
};
