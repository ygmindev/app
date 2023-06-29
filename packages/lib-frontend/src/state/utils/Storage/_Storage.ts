import AsyncStorage from '@react-native-async-storage/async-storage';
import { CookieStorage, NodeCookiesWrapper } from 'redux-persist-cookie-storage';

import { _Storage as _StorageBase } from '#lib-frontend/state/utils/Storage/_Storage.base';
import { type _StorageParamsModel } from '#lib-frontend/state/utils/Storage/_Storage.models';
import { STORAGE_BACKEND } from '#lib-frontend/state/utils/Storage/Storage.constants';
import { type StorageModel } from '#lib-frontend/state/utils/Storage/Storage.models';
import { isServer } from '#lib-platform/core/utils/isServer/isServer';
import { type ClassModel } from '#lib-shared/core/core.models';

export class _Storage extends _StorageBase {
  constructor({ backends = [STORAGE_BACKEND.ASYNC], cookies }: _StorageParamsModel) {
    super({ backends });

    this._storages = backends.map((backend) => {
      switch (backend) {
        case STORAGE_BACKEND.COOKIES: {
          const CookeStorageF = CookieStorage as ClassModel<StorageModel>;
          const NodeCookiesWrapperF = NodeCookiesWrapper as ClassModel<StorageModel>;
          const cookiesF = isServer ? new NodeCookiesWrapperF(cookies) : cookies;
          return cookies ? new CookeStorageF(cookiesF) : null;
        }
        case STORAGE_BACKEND.ASYNC:
          return AsyncStorage as StorageModel;
        default:
          return null;
      }
    });
  }
}
