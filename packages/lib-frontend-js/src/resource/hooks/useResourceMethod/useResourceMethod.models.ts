import { type GraphqlQueryParamsFieldsModel } from '@lib/frontend/data/utils/graphqlQuery/graphqlQuery.models';
import {
  type ResourceMethodTypeModel,
  type ResourceNameParamsModel,
} from '@lib/shared/resource/resource.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import { type OutputModel } from '@lib/shared/resource/utils/Output/Output.models';
import {
  type ResourceImplementationAfterDecoratorModel,
  type ResourceImplementationBeforeDecoratorModel,
} from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';
import { type RootInputModel } from '@lib/shared/resource/utils/Root/Root.models';

export type UseResourceMethodParamsFieldsModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TRoot = undefined,
> = GraphqlQueryParamsFieldsModel<OutputModel<TMethod, TType, TRoot>>;

export type UseResourceMethodParamsModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm = EntityResourceDataModel<TType>,
  TRoot = undefined,
> = ResourceNameParamsModel &
  RootInputModel<TRoot> & {
    after?: ResourceImplementationAfterDecoratorModel<TMethod, TType, TForm, TRoot>;
    before?: ResourceImplementationBeforeDecoratorModel<TMethod, TType, TForm, TRoot>;
    fields: UseResourceMethodParamsFieldsModel<TMethod, TType, TRoot>;
    method: TMethod;
  };

export type UseResourceMethodModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm = EntityResourceDataModel<TType>,
  TRoot = undefined,
> = {
  query(
    input?: InputModel<TMethod, TType, TForm, TRoot>,
  ): Promise<OutputModel<TMethod, TType, TRoot>>;
};

export type UseResourceMethodHookParamsModel<TRoot = undefined> = RootInputModel<TRoot>;
