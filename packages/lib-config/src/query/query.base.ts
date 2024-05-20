import { _query } from '@lib/config/query/_query';
import { type QueryConfigModel } from '@lib/config/query/query.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

const { _config, config } = defineConfig({
  _config: _query,

  config: {
    cacheTime: 1000 * 60 * 60, // 1h

    cacheTimeDefault: 100,
  } satisfies QueryConfigModel,
});

export { _config, config };
