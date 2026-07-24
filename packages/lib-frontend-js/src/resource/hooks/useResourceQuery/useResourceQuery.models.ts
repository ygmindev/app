import { type ResourceInputModel } from '@lib/model/resource/ResourceInput/ResourceInput.models';
import { type ResourceOutputModel } from '@lib/model/resource/ResourceOutput/ResourceOutput.models';
import { type RootInputModel } from '@lib/model/resource/Root/Root.models';
import { type GraphqlQueryParamsFieldsModel } from '@lib/shared/graphql/utils/graphqlQuery/graphqlQuery.models';
import { type ResourceQueryParamsModel } from '@lib/shared/graphql/utils/resourceQuery/resourceQuery.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

export type UseResourceQueryParamsFieldsModel<
  TMethod extends RESOURCE_METHOD_TYPE,
  TType,
  TRoot = undefined,
> = GraphqlQueryParamsFieldsModel<ResourceOutputModel<TMethod, TType, TRoot>>;

export type UseResourceQueryParamsModel<
  TMethod extends RESOURCE_METHOD_TYPE,
  TType,
  TRoot = undefined,
> = Omit<ResourceQueryParamsModel<TMethod, TType, TRoot>, 'input' | 'onQuery'>;

export type UseResourceQueryModel<
  TMethod extends RESOURCE_METHOD_TYPE,
  TType,
  TRoot = undefined,
> = {
  query(
    input?: ResourceInputModel<TMethod, TType, TRoot>,
  ): Promise<ResourceOutputModel<TMethod, TType, TRoot>>;
};

export type UseResourceQueryHookParamsModel<TRoot = undefined> = RootInputModel<TRoot>;
