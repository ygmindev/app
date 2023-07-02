import { _query } from '#lib-config/data/query/_query';
import { type _QueryConfigModel, type QueryConfigModel } from '#lib-config/data/query/query.models';

export const config: QueryConfigModel = {
  cacheTime: 5000,
};

export const _config: _QueryConfigModel = _query(config);
