import { _config as _babelConfig } from '@lib/config/node/babel/babel.web';
import { _bundle } from '@lib/config/node/bundle/_bundle';
import { config as configBase } from '@lib/config/node/bundle/bundle.frontend';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';

const { _config, config } = defineConfig({
  _config: _bundle,

  config: configBase,

  overrides: () => [
    {
      aliases: filterNil([
        { from: /react-native$/, to: 'react-native-web' },
        {
          from: 'react-native/Libraries/Image/AssetRegistry',
          to: 'react-native-web/dist/modules/AssetRegistry',
        },
        process.env.NODE_ENV === 'test' && {
          from: '\\.(css|sass)$',
          to: 'identity-obj-proxy',
        },
      ]),

      babelConfig: _babelConfig,

      serverExtension: '.server',
    },
  ],
});

export { _config, config };
