module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: 'src/tsconfig.json'
    }]
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'node']
}; 