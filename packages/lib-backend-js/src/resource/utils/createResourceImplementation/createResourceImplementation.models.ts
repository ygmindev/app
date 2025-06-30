import { type ClassModel } from '@lib/shared/core/core.models';
import {
  type FilterableResourceMethodTypeModel,
  type ResourceNameParamsModel,
} from '@lib/shared/resource/resource.models';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';
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
    count(
      input?: ResourceInputModel<FilterableResourceMethodTypeModel, TType, TRoot>,
    ): Promise<number>;
  };

export type CreateResourceImplementationModel<
  TType extends EntityResourceModel,
  TRoot = undefined,
> = ClassModel<
  ResourceImplementationModel<TType, TRoot> & {
    count(
      input?: ResourceInputModel<FilterableResourceMethodTypeModel, TType, TRoot>,
    ): Promise<number>;
  }
>;
