import { type CreateResourceImplementationParamsModel } from '@lib/backend/resource/utils/createResourceImplementation/createResourceImplementation.models';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { type EntityResourceImplementationModel } from '@lib/model/resource/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';
import { type ClassModel } from '@lib/shared/core/core.models';
import { type ResourceImplementationModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';

export type CreateEntityResourceImplementationParamsModel<TType extends EntityResourceModel> = Omit<
  CreateResourceImplementationParamsModel<TType>,
  'count' | keyof Omit<ResourceImplementationModel<TType>, 'name'>
>;

export type CreateEntityResourceImplementationModel<TType extends EntityResourceModel> = ClassModel<
  EntityResourceImplementationModel<TType>
>;
