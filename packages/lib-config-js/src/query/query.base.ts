import { _query } from '@lib/config/query/_query';
import { type _QueryConfigModel, type QueryConfigModel } from '@lib/config/query/query.models';
import { Config } from '@lib/config/utils/Config/Config';

export const queryConfig = new Config<QueryConfigModel, _QueryConfigModel>({
  config: _query,

  params: () => ({
    cacheTime: 1e3 * 60 * 60, // 1h

    cacheTimeDefault: 5e2, // 0.5 seconds
  }),
});
