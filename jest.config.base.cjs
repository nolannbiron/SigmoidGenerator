module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>setupTests.ts'],
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': '<rootDir>__mocks__/styleMock.ts',
        '\\.(gif|ttf|eot|svg)$': '<rootDir>__mocks__/fileMock.ts',
        '@/components': '<rootDir>packages/theme/src/components',
    },
    transform: {
        '^.+\\.tsx?$': [
            '@swc/jest',
            {
                jsc: {
                    transform: {
                        react: {
                            runtime: 'automatic',
                        },
                    },
                },
            },
        ],
    },
}
