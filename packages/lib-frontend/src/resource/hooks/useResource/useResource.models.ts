import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { type ResourceNameParamsModel } from '@lib/shared/resource/resource.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import {
  type ResourceImplementationDecoratorModel,
  type ResourceImplementationModel,
} from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';
import { type RootInputModel } from '@lib/shared/resource/utils/Root/Root.models';

export type UseResourceParamsModel<
  TType,
  TForm = EntityResourceDataModel<TType>,
  TRoot = undefined,
> = RootInputModel<TRoot> &
  ResourceNameParamsModel<TRoot> &
  ResourceImplementationDecoratorModel<TType, TForm, TRoot> &
  ResourceParamsModel<TType, TRoot>;

export type UseResourceModel<
  TType,
  TForm = EntityResourceDataModel<TType>,
  TRoot = undefined,
> = ResourceImplementationModel<TType, TForm, TRoot>;
