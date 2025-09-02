import { _mongoFilter } from '@lib/backend/database/utils/mongoFilter/_mongoFilter';
import {
  type MongoFilterModel,
  type MongoFilterParamsModel,
} from '@lib/backend/database/utils/mongoFilter/mongoFilter.models';

export const mongoFilter = <TType extends unknown>(
  ...params: MongoFilterParamsModel<TType>
): MongoFilterModel<TType> => _mongoFilter(...params);
