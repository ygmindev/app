import { bundleConfig as configBase } from '@lib/config/node/bundle/bundle.frontend';
import { serverConfig } from '@lib/config/node/server/server.base';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';

let bundleConfig = configBase;

bundleConfig = bundleConfig.extend(() => ({
  aliases: filterNil([
    { from: /^react-native$/, to: 'react-native-web' },

    // {
    //   from: '@react-native/assets',
    //   to: 'react-native-web/dist/modules/AssetRegistry/index.js',
    // },

    // {
    //   from: '@react-native/assets-registry/registry',
    //   to: 'react-native-web/dist/modules/AssetRegistry/index.js',
    // },

    process.env.NODE_ENV === 'test' && {
      from: '\\.(css|sass)$',
      to: 'identity-obj-proxy',
    },
  ]),

  babel: {
    plugins: [
      // 'react-native-web',

      // For react-native-reanimated
      // https://docs.swmansion.com/react-native-reanimated/docs/guides/web-support
      '@babel/plugin-proposal-export-namespace-from',
    ],
  },

  dedupe: ['react-dom'],

  define: {
    global: 'globalThis',
  },
  server: {
    certificate: serverConfig.params().certificate,

    isWebServer: true,
  },

  transpileModules: ['react-dom/client'],
}));

export { bundleConfig };
