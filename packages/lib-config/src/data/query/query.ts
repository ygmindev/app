import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { _query } from '@lib/config/data/query/_query';
import { config as configBase } from '@lib/config/data/query/query.base';

const { _config, config } = defineConfig({
  _config: _query,

  config: configBase,
});

export { _config, config };
