import { type ResourceFieldsModel } from '@lib/frontend/resource/resource.models';
import { type ResourceInputModel } from '@lib/model/resource/ResourceInput/ResourceInput.models';
import { type ResourceOutputModel } from '@lib/model/resource/ResourceOutput/ResourceOutput.models';
import { type RootInputModel } from '@lib/model/resource/Root/Root.models';
import { type GraphqlQueryHttpParamsModel } from '@lib/shared/graphql/utils/graphqlQuery/graphqlQuery.models';
import {
  type RESOURCE_METHOD_TYPE,
  type ResourceNameParamsModel,
} from '@lib/shared/resource/resource.models';
import {
  type ResourceImplementationBeforeDecoratorModel,
  type ResourceImplementationAfterDecoratorModel,
} from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';

export type ResourceQueryParamsModel<
  TMethod extends RESOURCE_METHOD_TYPE,
  TType,
  TRoot = undefined,
> = ResourceNameParamsModel &
  RootInputModel<TRoot> & {
    after?: ResourceImplementationAfterDecoratorModel<TMethod, TType, TRoot>;
    before?: ResourceImplementationBeforeDecoratorModel<TMethod, TType, TRoot>;
    fields: ResourceFieldsModel<TType>;
    input?: ResourceInputModel<TMethod, TType, TRoot>;
    method: TMethod;
    onQuery<TResult, TParams, TName extends string = string>(
      params: GraphqlQueryHttpParamsModel<TResult, TParams, TName>,
    ): Promise<TResult | null>;
  };

export type ResourceQueryModel<
  TMethod extends RESOURCE_METHOD_TYPE,
  TType,
  TRoot = undefined,
> = ResourceOutputModel<TMethod, TType, TRoot>;
