import { _babel } from '@lib/config/node/babel/_babel';
import { config as configBase } from '@lib/config/node/babel/babel.frontend';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

const { _config, config } = defineConfig({
  _config: _babel,

  config: configBase,

  overrides: [
    {
      plugins: [
        'react-native-web',
        // For react-native-reanimated
        // https://docs.swmansion.com/react-native-reanimated/docs/guides/web-support
        '@babel/plugin-proposal-export-namespace-from',
      ],
    },
  ],
});

export { _config, config };
