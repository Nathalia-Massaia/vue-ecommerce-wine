module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  testMatch: ['**/src/components/**/tests.ts'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/**/*.vue',
    '!src/views/**/*.vue',
  ],
};
