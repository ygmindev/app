import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { type ResourceModel } from '@lib/model/resource/Resource/Resource.models';
import { type ResourceNameParamsModel } from '@lib/shared/resource/resource.models';
import {
  type ResourceImplementationDecoratorModel,
  type ResourceImplementationModel,
} from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';
import { type RootInputModel } from '@lib/shared/resource/utils/Root/Root.models';

export type UseResourceParamsModel<
  TType extends ResourceModel,
  TRoot = undefined,
> = RootInputModel<TRoot> &
  ResourceNameParamsModel<TRoot> &
  ResourceImplementationDecoratorModel<TType, TRoot> &
  ResourceParamsModel<TType, TRoot>;

export type UseResourceModel<
  TType extends ResourceModel,
  TRoot = undefined,
> = ResourceImplementationModel<TType, TRoot>;
