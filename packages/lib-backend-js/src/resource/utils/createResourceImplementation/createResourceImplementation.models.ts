import { type ResourceModel } from '@lib/model/resource/Resource/Resource.models';
import { type ResourceInputModel } from '@lib/model/resource/ResourceInput/ResourceInput.models';
import { type ClassModel } from '@lib/shared/core/core.models';
import {
  type RESOURCE_METHOD_TYPE,
  type ResourceNameParamsModel,
} from '@lib/shared/resource/resource.models';
import {
  type ResourceImplementationDecoratorModel,
  type ResourceImplementationModel,
} from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';

export type CreateResourceImplementationParamsModel<
  TType extends ResourceModel,
  TRoot = undefined,
> = ResourceNameParamsModel<TRoot> &
  Partial<ResourceImplementationModel<TType, TRoot>> &
  ResourceImplementationDecoratorModel<TType, TRoot> & {
    Resource: ClassModel<TType>;
    count?(
      input?: ResourceInputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>,
    ): Promise<number>;
  };

export type CreateResourceImplementationModel<
  TType extends ResourceModel,
  TRoot = undefined,
> = ClassModel<
  ResourceImplementationModel<TType, TRoot> & {
    count?(
      input?: ResourceInputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>,
    ): Promise<number>;
  }
>;
