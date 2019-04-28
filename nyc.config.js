'use strict';
module.exports = {
    'check-coverage': true,
    statements: 70,
    branches: 75,
    functions: 90,
    lines: 70,
    all: true,
    include: ['components/**'],
    exclude: ['components/**/*.test.js'],
    reporter: ['html', 'lcov', 'cobertura', 'text-summary'],
};
