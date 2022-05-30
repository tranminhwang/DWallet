module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          assets: './src/assets',
          components: ['./src/components', './src/components/shared'],
          constants: './src/constants',
          containers: './src/containers',
          features: './src/features',
          hooks: './src/hooks',
          interfaces: './src/interfaces',
          languages: './src/languages',
          navigations: './src/navigations',
          reducers: './src/reducers',
          screens: './src/screens',
          services: './src/services',
          styles: './src/styles',
          utils: './src/utils',
        },
      },
    ],
  ],
};
