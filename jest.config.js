module.exports = {
  rootDir: 'src',
  moduleDirectories: ['node_modules', 'src'],
  coverageDirectory: 'reports',
  setupFiles: ['<rootDir>/../tests-setup/index.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/../tests-setup/fileMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
    '^test-utils$': '<rootDir>../tests-setup/utils.js',
    '^fixtures$': '<rootDir>../api/fixtures.js',
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'node',
};
