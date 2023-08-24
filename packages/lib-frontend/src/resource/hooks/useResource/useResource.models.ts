import { type UseResourceMethodParamsFieldsModel } from '#lib-frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import {
  type ResourceMethodTypeCrudModel,
  type ResourceNameParamsModel,
} from '#lib-shared/resource/resource.models';
import {
  type ResourceServiceDecoratorModel,
  type ResourceServiceModel,
} from '#lib-shared/resource/services/ResourceService/ResourceService.models';
import { type RootModel } from '#lib-shared/resource/utils/Root/Root.models';

export type UseResourceParamsModel<
  TType,
  TForm = undefined,
  TRoot = undefined,
> = ResourceNameParamsModel &
  RootModel<TRoot> &
  ResourceServiceDecoratorModel<TType, TForm, TRoot> & {
    fields: UseResourceMethodParamsFieldsModel<ResourceMethodTypeCrudModel, TType, TRoot>;
  };

export type UseResourceModel<TType, TForm = undefined, TRoot = undefined> = ResourceServiceModel<
  TType,
  TForm,
  TRoot
>;