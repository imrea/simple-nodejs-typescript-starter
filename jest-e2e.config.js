module.exports = {
  displayName: 'E2E',
  transform: { '^.+\\.ts?$': 'ts-jest' },
  testEnvironment: 'node',
  testRegex: './e2e/.*\\.(test|spec)?\\.(ts|ts)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
};
