import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { _query } from '@lib/config/data/query/_query';
import { type QueryConfigModel } from '@lib/config/data/query/query.models';

const { _config, config } = defineConfig({
  _config: _query,

  config: {
    cacheTime: 1000 * 60 * 60, // 1h

    cacheTimeDefault: 100,
  } satisfies QueryConfigModel,
});

export { _config, config };
