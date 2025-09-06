import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';
import { type ResourceArgsModel } from '@lib/shared/resource/utils/ResourceArgs/ResourceArgs.models';
import { type FilterOperators } from 'mongodb';

export type _MongoFilterParamsModel<TType extends unknown> = [
  params?:
    | ResourceArgsModel<RESOURCE_METHOD_TYPE.GET_MANY, TType>
    | ResourceArgsModel<RESOURCE_METHOD_TYPE.GET, TType>,
  prefix?: string,
];

export type _MongoFilterModel<TType extends unknown> = Array<{
  condition: keyof FilterOperators<TType>;
  field: string;
  value?: unknown;
}>;
