import { type CreateResourceImplementationParamsModel } from '@lib/backend/resource/utils/createResourceImplementation/createResourceImplementation.models';
import { type ClassModel } from '@lib/shared/core/core.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type EntityResourceImplementationModel } from '@lib/shared/resource/resources/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';
import { type ResourceImplementationModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';

export type CreateEntityResourceImplementationParamsModel<
  TType,
  TForm = EntityResourceDataModel<TType>,
> = Omit<
  CreateResourceImplementationParamsModel<TType, TForm>,
  'count' | keyof ResourceImplementationModel<TType, TForm>
>;

export type CreateEntityResourceImplementationModel<
  TType,
  TForm = EntityResourceDataModel<TType>,
> = ClassModel<EntityResourceImplementationModel<TType, TForm>>;
