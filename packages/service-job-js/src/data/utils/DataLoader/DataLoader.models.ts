import { type ResourceClassModel } from '@lib/backend/resource/resource.models';
import { type SourcedEntityResourceModel } from '@lib/model/data/SourcedEntityResource/SourcedEntityResource.models';
import { type ResourceImplementationModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';

export type DataLoaderParamsModel<TType extends SourcedEntityResourceModel> = {
  ResourceImplementation?: ResourceClassModel<Partial<ResourceImplementationModel<TType>>>;
  name?: string;
  source?: string;
};

export type DataLoaderModel<TType extends SourcedEntityResourceModel> = {
  get name(): string;
  get source(): string | undefined;
  fetch(): Promise<Array<Partial<TType>>>;
  fetchPostProcess(): Promise<Array<Partial<TType>>>;
  upload(): Promise<Array<Partial<TType>>>;
};
