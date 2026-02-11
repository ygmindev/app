import { type StorageModel } from '@lib/model/data/Storage/Storage.models';
import { type ResourceImplementationModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';

export type StorageImplementationModel = Pick<
  ResourceImplementationModel<StorageModel>,
  'create' | 'createMany'
>;
