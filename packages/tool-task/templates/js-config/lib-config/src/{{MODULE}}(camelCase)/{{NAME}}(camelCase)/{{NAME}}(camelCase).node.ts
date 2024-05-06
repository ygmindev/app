import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { _{{NAME}}(camelCase) } from '@lib/config/{{MODULE}}(camelCase)/{{NAME}}(camelCase)/_{{NAME}}(camelCase)';
import { config as configBase } from '@lib/config/{{MODULE}}(camelCase)/{{NAME}}(camelCase)/{{NAME}}(camelCase).base';

const { _config, config } = defineConfig({
  _config: _{{NAME}}(camelCase),

  config: configBase,

  overrides: [],
});

export { _config, config };
ÇÇ