/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>src/setupTests.ts'],
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': '<rootDir>/src/__mocks__/styleMock.ts',
        '\\.(gif|ttf|eot|svg)$': '<rootDir>/src/__mocks__/fileMock.ts',
    },
}
