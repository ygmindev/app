import { type ResourceImplementationModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';

export type EmbeddedResourceImplementationModel<TType, TForm, TRoot> = ResourceImplementationModel<
  TType,
  TForm,
  TRoot
>;
