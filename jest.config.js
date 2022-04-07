module.exports = {
  testMatch: ['**/(*.)unit.js'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js?$': 'babel-jest'
  },
  moduleNameMapper: {
    'swiper': 'jest-transform-stub'
  }
}