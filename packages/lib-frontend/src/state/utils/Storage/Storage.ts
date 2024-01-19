import AsyncStorage from '@react-native-async-storage/async-storage';
import { CookieStorage, NodeCookiesWrapper } from 'redux-persist-cookie-storage';

import { Storage as StorageBase } from '@lib/frontend/state/utils/Storage/Storage.base';
import {
  type StorageModel,
  type StorageParamsModel,
} from '@lib/frontend/state/utils/Storage/Storage.models';
import { isServer } from '@lib/platform/core/utils/isServer/isServer';
import { type ClassModel } from '@lib/shared/core/core.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';

export class Storage extends StorageBase implements StorageModel {
  constructor({ cookies }: StorageParamsModel) {
    super({
      storages: filterNil([
        cookies &&
          new (CookieStorage as ClassModel<StorageModel>)(
            isServer ? new (NodeCookiesWrapper as ClassModel<StorageModel>)(cookies) : cookies,
          ),
        AsyncStorage as StorageModel,
      ]),
    });
  }
}
