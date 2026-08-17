import { type StorageModel } from '@lib/model/data/Storage/Storage.models';

export type _StorageClientModel = {
  presign(params: Partial<StorageModel>): Promise<Partial<StorageModel>>;

  remove(params: string): Promise<void>;
};
