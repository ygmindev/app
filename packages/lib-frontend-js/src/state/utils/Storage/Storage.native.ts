import { Storage as StorageBase } from '@lib/frontend/state/utils/Storage/Storage.base';
import {
  type StorageModel,
  type StorageParamsModel,
} from '@lib/frontend/state/utils/Storage/Storage.models';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class Storage extends StorageBase implements StorageModel {
  constructor(_: StorageParamsModel) {
    super({ storages: [AsyncStorage as StorageModel] });
  }
}
