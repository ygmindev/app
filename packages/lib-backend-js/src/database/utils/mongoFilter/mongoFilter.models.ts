import {
  type _MongoFilterModel,
  type _MongoFilterParamsModel,
} from '@lib/backend/database/utils/mongoFilter/_mongoFilter.models';

export type MongoFilterParamsModel<TType extends unknown> = _MongoFilterParamsModel<TType>;

export type MongoFilterModel<TType extends unknown> = _MongoFilterModel<TType>;
