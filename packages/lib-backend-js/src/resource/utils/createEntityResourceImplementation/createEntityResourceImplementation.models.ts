import { type CreateResourceImplementationParamsModel } from '@lib/backend/resource/utils/createResourceImplementation/createResourceImplementation.models';
import { type ClassModel } from '@lib/shared/core/core.models';
import { type EntityResourceModel } from '@lib/model/core/EntityResource/EntityResource.models';
import { type EntityResourceImplementationModel } from '@lib/shared/resource/resources/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';
import { type ResourceImplementationModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';

export type CreateEntityResourceImplementationParamsModel<TType extends EntityResourceModel> = Omit<
  CreateResourceImplementationParamsModel<TType>,
  'count' | keyof ResourceImplementationModel<TType>
>;

export type CreateEntityResourceImplementationModel<TType extends EntityResourceModel> = ClassModel<
  EntityResourceImplementationModel<TType>
>;
