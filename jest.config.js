module.exports = {
    // globalSetup: '<rootDir>/test/global-setup.js',
    // globalTeardown: '<rootDir>/test/global-teardown.js',
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    testRegex: './components/.*.test.js',
    testPathIgnorePatterns: ['<rootDir>/dist'],
    testEnvironment: 'jsdom',
    coverageThreshold: {
        global: {
            statements: 0,
            branches: 0,
            functions: 0,
            lines: 0,
        },
    },
    collectCoverageFrom: ['components/**/*.js'],
    coveragePathIgnorePatterns: ['/node_modules/'],
    coverageDirectory: './coverage/',
    coverageReporters: ['text', 'html', 'cobertura', 'lcov'],
};
