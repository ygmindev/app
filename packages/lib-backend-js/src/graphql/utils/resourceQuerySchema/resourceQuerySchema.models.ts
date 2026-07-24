import { type _GraphqlConfigModel } from '@lib/config/graphql/graphql.models';
import { type ResourceOutputModel } from '@lib/model/resource/ResourceOutput/ResourceOutput.models';
import { type ResourceQueryParamsModel } from '@lib/shared/graphql/utils/resourceQuery/resourceQuery.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

export type ResourceQuerySchemaParamsModel<
  TMethod extends RESOURCE_METHOD_TYPE,
  TType,
  TRoot = undefined,
> = Omit<ResourceQueryParamsModel<TMethod, TType, TRoot>, 'onQuery'> & {
  schema: _GraphqlConfigModel;
};

export type ResourceQuerySchemaModel<
  TMethod extends RESOURCE_METHOD_TYPE,
  TType,
  TRoot = undefined,
> = ResourceOutputModel<TMethod, TType, TRoot>;
