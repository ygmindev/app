import AsyncStorage from '@react-native-async-storage/async-storage';

import { _Storage as _StorageBase } from '#lib-frontend/state/utils/Storage/_Storage.base';
import { type _StorageParamsModel } from '#lib-frontend/state/utils/Storage/_Storage.models';
import { STORAGE_BACKEND } from '#lib-frontend/state/utils/Storage/Storage.constants';
import { type StorageModel } from '#lib-frontend/state/utils/Storage/Storage.models';

export class _Storage extends _StorageBase {
  constructor({ backends = [STORAGE_BACKEND.ASYNC] }: _StorageParamsModel) {
    super({ backends });

    this._storages = backends.map((backend) => {
      switch (backend) {
        case STORAGE_BACKEND.ASYNC:
          return AsyncStorage as StorageModel;
        default:
          return null;
      }
    });
  }
}
