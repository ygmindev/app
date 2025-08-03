import { type ResourceClassModel } from '@lib/backend/resource/resource.models';
import { type ResourceImplementationModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';
import { type SourcedEntityResourceModel } from '@service/data/core/core.models';

export type DataLoaderParamsModel<TType extends SourcedEntityResourceModel, TRoot = undefined> = {
  ResourceImplementation: ResourceClassModel<Partial<ResourceImplementationModel<TType, TRoot>>>;

  source?: string;
};

export type DataLoaderModel<TType extends SourcedEntityResourceModel> = {
  load(): Promise<Array<Partial<TType>>>;
  upload(): Promise<Array<Partial<TType>>>;
};
