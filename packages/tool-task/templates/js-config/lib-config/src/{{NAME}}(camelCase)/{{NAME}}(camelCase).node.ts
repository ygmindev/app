import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { _{{NAME}}(camelCase) } from '@lib/config/{{NAME}}(camelCase)/_{{NAME}}(camelCase)';
import { config as configBase } from '@lib/config/{{NAME}}(camelCase)/{{NAME}}(camelCase).base';

const { _config, config } = defineConfig({
  _config: _{{NAME}}(camelCase),

  config: configBase,

  overrides: [],
});

export { _config, config };
ÇÇ