import { type CookiesModel } from '#lib-frontend/state/state.models';
import { type STORAGE_BACKEND } from '#lib-frontend/state/utils/Storage/Storage.constants';

export type StorageBackendModel = `${STORAGE_BACKEND}`;

export type _StorageParamsModel = {
  backends?: Array<StorageBackendModel>;
  cookies?: CookiesModel;
};

export type _StorageModel = {
  getItem<TType extends string = string>(key: string): Promise<TType | null>;

  removeItem(key: string): Promise<void>;

  setItem<TType extends string = string>(key: string, value: TType): Promise<void>;
};
