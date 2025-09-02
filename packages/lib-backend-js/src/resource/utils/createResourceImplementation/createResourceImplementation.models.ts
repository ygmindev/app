import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { type ClassModel } from '@lib/shared/core/core.models';
import {
  type RESOURCE_METHOD_TYPE,
  type ResourceNameParamsModel,
} from '@lib/shared/resource/resource.models';
import {
  type ResourceImplementationDecoratorModel,
  type ResourceImplementationModel,
} from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';
import { type ResourceInputModel } from '@lib/shared/resource/utils/ResourceInput/ResourceInput.models';

export type CreateResourceImplementationParamsModel<
  TType extends EntityResourceModel,
  TRoot = undefined,
> = ResourceNameParamsModel<TRoot> &
  ResourceImplementationModel<TType, TRoot> &
  ResourceImplementationDecoratorModel<TType, TRoot> & {
    Resource: ClassModel<TType>;
    count(input?: ResourceInputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>): Promise<number>;
  };

export type CreateResourceImplementationModel<
  TType extends EntityResourceModel,
  TRoot = undefined,
> = ClassModel<
  ResourceImplementationModel<TType, TRoot> & {
    entity: string;
    count(input?: ResourceInputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>): Promise<number>;
  }
>;
