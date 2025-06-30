import { type EntityResourceModel } from '@lib/model/core/EntityResource/EntityResource.models';
import { type ResourceImplementationModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';

export type RelatedResourceImplementationModel<
  TType extends EntityResourceModel,
  TRoot,
> = ResourceImplementationModel<TType, TRoot>;
