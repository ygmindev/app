import { type GraphQlQueryParamsFieldsModel } from '#lib-frontend/http/utils/graphQlQuery/graphQlQuery.models';
import { type WithResourceNameModel } from '#lib-shared/resource/decorators/withResourceName/withResourceName.models';
import { type ResourceMethodTypeModel } from '#lib-shared/resource/resource.models';
import { type InputModel } from '#lib-shared/resource/utils/Input/Input.models';
import { type OutputModel } from '#lib-shared/resource/utils/Output/Output.models';
import {
  type ResourceServiceAfterDecoratorModel,
  type ResourceServiceBeforeDecoratorModel,
} from '#lib-shared/resource/utils/Resource/ResourceService/ResourceService.models';
import { type RootModel } from '#lib-shared/resource/utils/Root/Root.models';

export type UseResourceMethodParamsFieldsModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TRoot = undefined,
> = GraphQlQueryParamsFieldsModel<OutputModel<TMethod, TType, TRoot>, false>;

export type UseResourceMethodParamsModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm,
  TRoot = undefined,
> = WithResourceNameModel &
  RootModel<TRoot> & {
    after?: ResourceServiceAfterDecoratorModel<TMethod, TType, TRoot>;
    before?: ResourceServiceBeforeDecoratorModel<TMethod, TType, TForm, TRoot>;
    fields: UseResourceMethodParamsFieldsModel<TMethod, TType, TRoot>;
    method: TMethod;
  };

export type UseResourceMethodModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm,
  TRoot = undefined,
> = {
  query(
    input: InputModel<TMethod, TType, TForm, TRoot>,
  ): Promise<OutputModel<TMethod, TType, TRoot>>;
};

export type UseResourceMethodHookParamsModel<TRoot = undefined> = RootModel<TRoot>;
