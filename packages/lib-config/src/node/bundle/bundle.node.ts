import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { _config as _babelConfig } from '@lib/config/node/babel/babel.node';
import { _bundle } from '@lib/config/node/bundle/_bundle';
import { config as configBase } from '@lib/config/node/bundle/bundle.base';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

const { _config, config } = defineConfig({
  _config: _bundle,

  config: configBase,

  overrides: () => [
    {
      babelConfig: _babelConfig,

      envPrefix: ['SERVER_'],

      watch: [fromPackages('lib-backend/src/**/*')],
    },
  ],
});

export { _config, config };
