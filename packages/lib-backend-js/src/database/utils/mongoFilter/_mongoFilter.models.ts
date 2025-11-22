import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';
import { type ResourceInputModel } from '@lib/model/resource/ResourceInput/ResourceInput.models';
import { type FilterOperators } from 'mongodb';

export type _MongoFilterParamsModel<TType extends unknown> = [
  params?:
    | ResourceInputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType>
    | ResourceInputModel<RESOURCE_METHOD_TYPE.GET, TType>,
  prefix?: string,
];

export type _MongoFilterModel<TType extends unknown> = Array<{
  condition: keyof FilterOperators<TType>;
  field: string;
  value?: unknown;
}>;
