import type {
  _StorageModel,
  _StorageParamsModel,
  StorageBackendModel,
} from '@lib/frontend/state/utils/Storage/_Storage.models';
import type { StorageModel } from '@lib/frontend/state/utils/Storage/Storage.models';
import { debug } from '@lib/shared/logging/utils/logger/logger';

export class _Storage implements _StorageModel {
  protected _backends: Array<StorageBackendModel> = [];
  protected _storages: Array<StorageModel | null> = [];

  constructor({ backends }: Pick<_StorageParamsModel, 'backends'>) {
    this._backends = backends || [];
  }

  async getItem<TType extends string = string>(key: string): Promise<TType | null> {
    for (let i = 0; i < this._storages.length; ++i) {
      const storage = this._storages[i];
      if (storage) {
        try {
          const result = await storage.getItem<TType>(key);
          if (result) {
            process.env.NODE_ENV === 'development' &&
              debug('[Storage] get', key, result, this._backends[i]);
            return result;
          }
        } catch {
          continue;
        }
      }
    }
    return null;
  }

  async removeItem(key: string): Promise<void> {
    for (let i = 0; i < this._storages.length; ++i) {
      const storage = this._storages[i];
      if (storage) {
        try {
          process.env.NODE_ENV === 'development' &&
            debug('[Storage] remove', key, this._backends[i]);
          await storage.removeItem(key);
          break;
        } catch {
          continue;
        }
      }
    }
  }

  async setItem<TType extends string = string>(key: string, value: TType): Promise<void> {
    for (let i = 0; i < this._storages.length; ++i) {
      const storage = this._storages[i];
      if (storage) {
        process.env.NODE_ENV === 'development' &&
          debug('[Storage] set', key, value, this._backends[i]);
        try {
          await storage.setItem<TType>(key, value);
          break;
        } catch {
          continue;
        }
      }
    }
  }
}
