import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { _babel } from '@lib/config/node/babel/_babel';
import { config as configBase } from '@lib/config/node/babel/babel.frontend';

const { _config, config } = defineConfig({
  _config: _babel,

  config: configBase,

  overrides: [
    {
      plugins: [],
    },
  ],
});

export { _config, config };
