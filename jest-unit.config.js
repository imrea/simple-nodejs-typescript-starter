module.exports = {
  displayName: 'UNIT',
  transform: { '^.+\\.ts?$': 'ts-jest' },
  testEnvironment: 'node',
  testRegex: './src/.*\\.(test|spec)?\\.(ts|ts)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
};
