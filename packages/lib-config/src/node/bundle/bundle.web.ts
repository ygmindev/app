import { fromConfig } from '#lib-backend/file/utils/fromConfig/fromConfig';
import { defineConfig } from '#lib-config/core/utils/defineConfig/defineConfig';
import { _config as _babelConfig } from '#lib-config/node/babel/babel.web';
import { _bundle } from '#lib-config/node/bundle/_bundle';
import { config as configBase } from '#lib-config/node/bundle/bundle.frontend';

const { _config, config } = defineConfig({
  _config: _bundle,

  config: configBase,

  overrides: () => [
    {
      aliases: {
        'react-native': 'react-native-web',
        ...(process.env.NODE_ENV === 'test' ? { '\\.(css|sass)$': 'identity-obj-proxy' } : {}),
      },

      babelConfig: _babelConfig,

      provide: {
        requestAnimationFrame: fromConfig('node/bundle/aliases/requestAnimationFrame/index.js'),
      },
    },
  ],
});

export { _config, config };
