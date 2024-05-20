import { _config as _babelConfig } from '@lib/config/node/babel/babel.native';
import { _bundle } from '@lib/config/node/bundle/_bundle';
import { config as configBase } from '@lib/config/node/bundle/bundle.frontend';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

const { _config, config } = defineConfig({
  _config: _bundle,

  config: configBase,

  overrides: () => [
    {
      babelConfig: _babelConfig,
    },
  ],
});

export { _config, config };
