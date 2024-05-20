import { _query } from '@lib/config/query/_query';
import { config as configBase } from '@lib/config/query/query.base';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

const { _config, config } = defineConfig({
  _config: _query,

  config: configBase,
});

export { _config, config };
