import { type GraphQlQueryParamsFieldsModel } from '#lib-frontend/data/utils/graphQlQuery/graphQlQuery.models';
import {
  type ResourceMethodTypeModel,
  type ResourceNameParamsModel,
} from '#lib-shared/resource/resource.models';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import { type InputModel } from '#lib-shared/resource/utils/Input/Input.models';
import { type OutputModel } from '#lib-shared/resource/utils/Output/Output.models';
import {
  type ResourceServiceAfterDecoratorModel,
  type ResourceServiceBeforeDecoratorModel,
} from '#lib-shared/resource/utils/ResourceService/ResourceService.models';
import { type RootInputModel } from '#lib-shared/resource/utils/Root/Root.models';

export type UseResourceMethodParamsFieldsModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TRoot = undefined,
> = GraphQlQueryParamsFieldsModel<OutputModel<TMethod, TType, TRoot>>;

export type UseResourceMethodParamsModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm = EntityResourceDataModel<TType>,
  TRoot = undefined,
> = ResourceNameParamsModel &
  RootInputModel & {
    after?: ResourceServiceAfterDecoratorModel<TMethod, TType, TRoot>;
    before?: ResourceServiceBeforeDecoratorModel<TMethod, TType, TForm>;
    fields: UseResourceMethodParamsFieldsModel<TMethod, TType, TRoot>;
    method: TMethod;
  };

export type UseResourceMethodModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm = EntityResourceDataModel<TType>,
  TRoot = undefined,
> = {
  query(input?: InputModel<TMethod, TType, TForm>): Promise<OutputModel<TMethod, TType, TRoot>>;
};

export type UseResourceMethodHookParamsModel = RootInputModel;
