import { type CookiesModel } from '@lib/frontend/http/utils/cookies/cookies.models';

export type StorageParamsModel = { cookies?: CookiesModel };

export type StorageBaseParamsModel = { storages?: Array<StorageModel> };

export type StorageModel = {
  getItem<TType extends string = string>(key: string): Promise<TType | null>;

  removeItem(key: string): Promise<void>;

  setItem<TType extends string = string>(key: string, value: TType): Promise<void>;
};
