import AsyncStorage from '@react-native-async-storage/async-storage';

import { _Storage } from '#lib-frontend/state/utils/Storage/_Storage';
import {
  type StorageModel,
  type StorageParamsModel,
} from '#lib-frontend/state/utils/Storage/Storage.models';

export class Storage extends _Storage implements StorageModel {
  constructor({}: StorageParamsModel) {
    super({ storages: [AsyncStorage as StorageModel] });
  }
}
