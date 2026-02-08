import { type ResourceModel } from '@lib/model/resource/Resource/Resource.models';

export type StorageModel = ResourceModel & {
  filename: string;

  uri?: string;
};
