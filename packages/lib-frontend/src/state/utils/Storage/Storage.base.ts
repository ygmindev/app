import {
  type StorageBaseParamsModel,
  type StorageModel,
} from '#lib-frontend/state/utils/Storage/Storage.models';
import { isEmpty } from '#lib-shared/core/utils/isEmpty/isEmpty';
import { debug } from '#lib-shared/logging/utils/logger/_logger';

export class StorageBase implements StorageModel {
  protected storages?: Array<StorageModel>;

  constructor({ storages }: StorageBaseParamsModel) {
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
          } catch (e) {
            continue;
          }
        }
      }
    }
  }

  async setItem<TType extends string = string>(key: string, value: TType): Promise<void> {
    if (!isEmpty(value) && this.storages) {
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
