import { type StorageModel } from '@lib/model/data/Storage/Storage.models';

export type _StorageClientModel = {
  signUri(params: Partial<StorageModel>): Promise<Partial<StorageModel>>;
};
