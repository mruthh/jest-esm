module.exports = {
  testMatch: ['**/(*.)unit.js'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    // '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
    //   'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest'
  },
}