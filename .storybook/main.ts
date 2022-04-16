const path = require('path')

module.exports = {
  stories: [
    '../src/components/intro.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chakra-ui/storybook-addon',
  ],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: true,
        esModuleInterop: true,
      },
    },
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          src: path.resolve(__dirname, '../src'),
          '@emotion/core': path.resolve(
            __dirname,
            '../node_modules/@emotion/react'
          ),
          'emotion-theming': path.resolve(
            __dirname,
            '../node_modules/@emotion/react'
          ),
        },
      },
    }
  },
}
