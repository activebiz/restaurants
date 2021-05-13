module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'react/prop-types': [
      2,
      {
        ignore: ['children'],
      },
    ],
  },
};
