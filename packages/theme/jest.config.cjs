const jestConfigBase = require('../../jest.config.base.cjs')

console.log(__dirname)

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    ...jestConfigBase,
}
