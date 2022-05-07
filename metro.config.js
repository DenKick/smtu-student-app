/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
**/

// eslint-disable-next-line no-undef
module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
