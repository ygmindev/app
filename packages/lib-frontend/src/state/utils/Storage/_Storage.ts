import { isSsr } from '@lib/frontend/platform/utils/isSsr/isSsr';
import { _Storage as _StorageBase } from '@lib/frontend/state/utils/Storage/_Storage.base';
import type { _StorageParamsModel } from '@lib/frontend/state/utils/Storage/_Storage.models';
import { STORAGE_BACKEND } from '@lib/frontend/state/utils/Storage/Storage.constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CookieStorage, NodeCookiesWrapper } from 'redux-persist-cookie-storage';

export class _Storage extends _StorageBase {
  constructor({ backends = [STORAGE_BACKEND.ASYNC], cookies }: _StorageParamsModel) {
    super({ backends });

    this._storages = backends.map((backend) => {
      switch (backend) {
        case STORAGE_BACKEND.COOKIES: {
          const _cookies = isSsr ? new NodeCookiesWrapper(cookies) : cookies;
          return cookies && new CookieStorage(_cookies);
        }
        case STORAGE_BACKEND.ASYNC:
          return AsyncStorage;
        default:
          return null;
      }
    });
  }
}
