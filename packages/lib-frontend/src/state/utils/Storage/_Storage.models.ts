import { type StorageModel } from '#lib-frontend/state/utils/Storage/Storage.models';

export type _StorageParamsModel = {
  storages?: Array<StorageModel>;
};

export type _StorageModel = {
  getItem<TType extends string = string>(key: string): Promise<TType | null>;

  removeItem(key: string): Promise<void>;

  setItem<TType extends string = string>(key: string, value: TType): Promise<void>;
};
