const fileRegex =
  '\\.(css|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$';

module.exports = {
  roots: ['<rootDir>/test', '<rootDir>/src'],
  verbose: true,
  coverageDirectory: './__coverage__',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
  ],
  modulePaths: ['<rootDir>'],
  transform: {
    '^.+\\.(j|t)sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    [fileRegex]: 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/test/setup/setup-jest.ts'],
};
