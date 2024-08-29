import AsyncStorage from '@react-native-async-storage/async-storage';

import { Storage as StorageBase } from '@lib/frontend/state/utils/Storage/Storage.base';
import {
  type StorageModel,
  type StorageParamsModel,
} from '@lib/frontend/state/utils/Storage/Storage.models';

export class Storage extends StorageBase implements StorageModel {
  constructor({}: StorageParamsModel) {
    super({ storages: [AsyncStorage as StorageModel] });
  }
}
