import { _query } from '@lib/config/query/_query';
import { type _QueryConfigModel, type QueryConfigModel } from '@lib/config/query/query.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

export const config = defineConfig<QueryConfigModel, _QueryConfigModel>({
  config: _query,

  params: () => ({
    cacheTime: 1e3 * 60 * 60, // 1h

    cacheTimeDefault: 5e2, // 0.5 seconds
  }),
});

export default config;
