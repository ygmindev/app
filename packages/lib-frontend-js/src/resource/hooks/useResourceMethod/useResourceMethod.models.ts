import { type GraphqlQueryParamsFieldsModel } from '@lib/frontend/data/utils/graphqlQuery/graphqlQuery.models';
import { type ResourceFieldsModel } from '@lib/frontend/resource/resource.models';
import { type ResourceInputModel } from '@lib/model/resource/ResourceInput/ResourceInput.models';
import { type ResourceOutputModel } from '@lib/model/resource/ResourceOutput/ResourceOutput.models';
import { type RootInputModel } from '@lib/model/resource/Root/Root.models';
import {
  type RESOURCE_METHOD_TYPE,
  type ResourceNameParamsModel,
} from '@lib/shared/resource/resource.models';
import {
  type ResourceImplementationAfterDecoratorModel,
  type ResourceImplementationBeforeDecoratorModel,
} from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';

export type UseResourceMethodParamsFieldsModel<
  TMethod extends RESOURCE_METHOD_TYPE,
  TType,
  TRoot = undefined,
> = GraphqlQueryParamsFieldsModel<ResourceOutputModel<TMethod, TType, TRoot>>;

export type UseResourceMethodParamsModel<
  TMethod extends RESOURCE_METHOD_TYPE,
  TType,
  TRoot = undefined,
> = ResourceNameParamsModel &
  RootInputModel<TRoot> & {
    after?: ResourceImplementationAfterDecoratorModel<TMethod, TType, TRoot>;
    before?: ResourceImplementationBeforeDecoratorModel<TMethod, TType, TRoot>;
    fields: ResourceFieldsModel<TType>;
    method: TMethod;
  };

export type UseResourceMethodModel<
  TMethod extends RESOURCE_METHOD_TYPE,
  TType,
  TRoot = undefined,
> = {
  query(
    input?: ResourceInputModel<TMethod, TType, TRoot>,
  ): Promise<ResourceOutputModel<TMethod, TType, TRoot>>;
};

export type UseResourceMethodHookParamsModel<TRoot = undefined> = RootInputModel<TRoot>;
