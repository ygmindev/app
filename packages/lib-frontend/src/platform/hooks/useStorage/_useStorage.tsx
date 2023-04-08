import type { _UseStorageModel } from '@lib/frontend/platform/hooks/useStorage/_useStorage.models';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const _useStorage = <TType extends string = string>(): _UseStorageModel<TType> => ({
  clear: AsyncStorage.clear,
  get: async (key) => (await AsyncStorage.getItem(key)) as TType,
  remove: async (key) => AsyncStorage.removeItem(key),
  set: async (key, value) => await AsyncStorage.setItem(key, value),
});
