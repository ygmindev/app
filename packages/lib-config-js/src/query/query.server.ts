import configBase from '@lib/config/query/query.base';
import { type _QueryConfigModel, type QueryConfigModel } from '@lib/config/query/query.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

export const config = defineConfig<QueryConfigModel, _QueryConfigModel>({
  ...configBase,

  overrides: () => [{ cacheTimeDefault: Infinity }],
});

export default config;
