// eslint-disable-next-line no-undef
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '~store': './src/store',
          '~styles': './src/styles',
          '~components': './src/components',
          '~screens': './src/screens',
          '~types': './src/types',
          '~hooks': './src/hooks',
          '~lib': './src/lib',
          '~icons': './src/icons',
          '~constants': './src/constants',
          '~helpers': './src/helpers',
          '~routes': './src/routes',
        },
      },
    ],
  ],
}
