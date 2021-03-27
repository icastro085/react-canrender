const fileRegex =
  '\\.(css|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$';

module.exports = {
  verbose: true,
  coverageDirectory: './__coverage__',
  modulePaths: ['<rootDir>'],
  transform: {
    '^.+\\.(j|t)sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    [fileRegex]: 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['./node_modules/@testing-library/jest-dom/dist/index.js'],
};
