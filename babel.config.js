/** @format */

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./source'],
        alias: { '~': './source', '__mocks__': './__mocks__' },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
