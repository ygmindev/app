import { type StorageModel } from '@lib/model/data/Storage/Storage.models';
import { type BooleanValueModel } from '@lib/model/resource/BooleanValue/BooleanValue.models';

export type StorageImplementationModel = {
  presign(params: Partial<StorageModel>): Promise<Partial<StorageModel>>;

  presignMany(params: Array<Partial<StorageModel>>): Promise<Array<Partial<StorageModel> | null>>;

  remove(params: string): Promise<BooleanValueModel>;
};
