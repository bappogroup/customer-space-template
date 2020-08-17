const { jest: jestConfig } = require('@bappo/scripts/config');

module.exports = {
  ...jestConfig,
  roots: ['<rootDir>/packages'],
  testMatch: [
    '**/__tests__/**/*.+(js|jsx|ts|tsx)',
    '**/*\\.test\\.(js|jsx|ts|tsx)',
  ],
};
