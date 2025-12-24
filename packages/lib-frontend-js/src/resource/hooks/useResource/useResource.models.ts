import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { type ResourceModel } from '@lib/model/resource/Resource/Resource.models';
import { type RootInputModel } from '@lib/model/resource/Root/Root.models';
import { type ResourceNameParamsModel } from '@lib/shared/resource/resource.models';
import {
  type ResourceImplementationDecoratorModel,
  type ResourceImplementationModel,
} from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';

export type UseResourceParamsModel<
  TType extends ResourceModel,
  TRoot = undefined,
> = RootInputModel<TRoot> &
  ResourceNameParamsModel<TRoot> &
  ResourceImplementationDecoratorModel<TType, TRoot> &
  ResourceParamsModel<TType, TRoot>;

export type UseResourceModel<TType extends ResourceModel, TRoot = undefined> = Omit<
  ResourceImplementationModel<TType, TRoot>,
  'subscribe'
>;
