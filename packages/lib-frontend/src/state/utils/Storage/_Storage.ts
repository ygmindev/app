import {
  type _StorageModel,
  type _StorageParamsModel,
} from '#lib-frontend/state/utils/Storage/_Storage.models';
import { type StorageModel } from '#lib-frontend/state/utils/Storage/Storage.models';
import { debug } from '#lib-shared/logging/utils/logger/_logger';

export class _Storage implements _StorageModel {
  protected storages?: Array<StorageModel>;

  constructor({ storages }: _StorageParamsModel) {
    this.storages = storages;
  }

  async getItem<TType extends string = string>(key: string): Promise<TType | null> {
    if (this.storages) {
      for (let i = 0; i < this.storages.length; ++i) {
        const storage = this.storages[i];
        if (storage) {
          try {
            const value = await storage.getItem<TType>(key);
            process.env.NODE_ENV === 'development' && value && debug('storage get', key, value);
            return value;
          } catch {
            continue;
          }
        }
      }
    }

    return null;
  }

  async removeItem(key: string): Promise<void> {
    if (this.storages) {
      for (let i = 0; i < this.storages.length; ++i) {
        const storage = this.storages[i];
        if (storage) {
          try {
            await storage.removeItem(key);
            process.env.NODE_ENV === 'development' && debug('storage remove', key);
            break;
          } catch {
            continue;
          }
        }
      }
    }
  }

  async setItem<TType extends string = string>(key: string, value: TType): Promise<void> {
    if (this.storages) {
      for (let i = 0; i < this.storages.length; ++i) {
        const storage = this.storages[i];
        if (storage) {
          try {
            await storage.setItem<TType>(key, value);
            process.env.NODE_ENV === 'development' && value && debug('storage set', key, value);
            break;
          } catch {
            continue;
          }
        }
      }
    }
  }
}
