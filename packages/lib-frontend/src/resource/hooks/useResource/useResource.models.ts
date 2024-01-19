import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { type ResourceNameParamsModel } from '@lib/shared/resource/resource.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import {
  type ResourceServiceDecoratorModel,
  type ResourceServiceModel,
} from '@lib/shared/resource/utils/ResourceService/ResourceService.models';
import { type RootInputModel } from '@lib/shared/resource/utils/Root/Root.models';

export type UseResourceParamsModel<
  TType,
  TForm = EntityResourceDataModel<TType>,
  TRoot = undefined,
> = RootInputModel<TRoot> &
  ResourceNameParamsModel<TRoot> &
  ResourceServiceDecoratorModel<TType, TForm, TRoot> &
  ResourceParamsModel<TType, TRoot>;

export type UseResourceModel<
  TType,
  TForm = EntityResourceDataModel<TType>,
  TRoot = undefined,
> = ResourceServiceModel<TType, TForm, TRoot>;
