import configBase from '@lib/config/node/bundle/bundle.frontend';
import {
  type _BundleConfigModel,
  type BundleConfigModel,
} from '@lib/config/node/bundle/bundle.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';

export const config = defineConfig<BundleConfigModel, _BundleConfigModel>({
  ...configBase,

  overrides: () => [
    {
      aliases: filterNil([
        { from: /^react-native$/, to: 'react-native-web' },

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

      define: {
        global: 'globalThis',
      },
    },
  ],
});

export default config;
