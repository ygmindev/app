import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type ResourceImplementationModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';

export type EntityResourceImplementationModel<
  TType,
  TForm = EntityResourceDataModel<TType>,
> = ResourceImplementationModel<TType, TForm>;
