import { queryConfig as configBase } from '@lib/config/query/query.base';

let queryConfig = configBase;

queryConfig = queryConfig.extend(() => ({
  cacheTimeDefault: Infinity,
}));

export { queryConfig };
