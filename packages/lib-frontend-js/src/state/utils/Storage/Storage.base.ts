import {
  type StorageBaseParamsModel,
  type StorageModel,
} from '@lib/frontend/state/utils/Storage/Storage.models';
import { isLocalDevelopment } from '@lib/shared/environment/utils/isLocalDevelopment/isLocalDevelopment';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';

export class Storage implements StorageModel {
  protected storages?: Array<StorageModel>;

  constructor({ storages }: StorageBaseParamsModel) {
    this.storages = storages;
  }

  async getItem<TType extends string = string>(key: string): Promise<TType | null> {
    if (this.storages) {
      isLocalDevelopment && logger.debug('storage get', key);
      for (let i = 0; i < this.storages.length; ++i) {
        const storage = this.storages[i];
        if (storage) {
          try {
            const value = await storage.getItem<TType>(key);
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
      isLocalDevelopment && console.warn('storage remove', key);
      for (let i = 0; i < this.storages.length; ++i) {
        const storage = this.storages[i];
        if (storage) {
          try {
            await storage.removeItem(key);
          } catch (e) {
            continue;
          }
        }
      }
    }
  }

  async setItem<TType extends string = string>(key: string, value: TType): Promise<void> {
    if (this.storages) {
      isLocalDevelopment && value && console.warn('storage set', key, value);
      for (let i = 0; i < this.storages.length; ++i) {
        const storage = this.storages[i];
        if (storage) {
          try {
            await storage.setItem<TType>(key, value);
          } catch {
            continue;
          }
        }
      }
    }
  }
}
