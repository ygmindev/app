import {
  LocalContextModel,
  LocalStorageModel,
} from '@lib/backend/core/utils/LocalStorage/LocalStorage.models';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { StringKeyModel } from '@lib/shared/core/core.models';
import { AsyncLocalStorage } from 'async_hooks';

@withContainer()
export class LocalStorage implements LocalStorageModel {
  protected _storage: AsyncLocalStorage<unknown>;

  constructor() {
    this._storage = new AsyncLocalStorage();
  }

  get = <TKey extends StringKeyModel<LocalContextModel>>(
    key?: TKey,
  ): TKey extends string ? LocalContextModel[TKey] : LocalContextModel => {
    const store = (this._storage.getStore() ?? {}) as LocalContextModel;
    return (key ? store[key] : store) as TKey extends string
      ? LocalContextModel[TKey]
      : LocalContextModel;
  };

  run = async <TType extends unknown>(
    callback: () => Promise<TType>,
    context: LocalContextModel = {},
  ): Promise<TType> => {
    return this._storage.run(context, callback);
  };

  set = <TKey extends StringKeyModel<LocalContextModel>>(
    key?: TKey,
    value?: LocalContextModel[TKey],
  ): void => {
    const store = (this._storage.getStore() ?? {}) as LocalContextModel;
    store[key as StringKeyModel<LocalContextModel>] = value;
  };
}
