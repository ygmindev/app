import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { type ResourceImplementationModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';

export type EntityResourceImplementationModel<TType extends EntityResourceModel> =
  ResourceImplementationModel<TType> & {
    entity: string;
  };
