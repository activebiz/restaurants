// jest.config.js
const {defaults} = require('jest-config');
module.exports = {
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'test.js', 'test.jsx'],
  transformIgnorePatterns: ['node_modules/(?!static-container)/'],
  "preset": "react-native"
};
