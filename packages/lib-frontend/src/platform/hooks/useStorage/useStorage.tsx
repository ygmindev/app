import { _useStorage } from '@lib/frontend/platform/hooks/useStorage/_useStorage';
import type { UseStorageModel } from '@lib/frontend/platform/hooks/useStorage/useStorage.models';

export const useStorage = <TType extends string = string>(): UseStorageModel<TType> => {
  const { clear, get, remove, set } = _useStorage<TType>();

  const _getKey = (key: string): string => `${process.env.APP_NAME}.${key}`;

  return {
    clear,
    get: async (key) => get(_getKey(key)),
    remove: async (key) => remove(_getKey(key)),
    set: async (key, value) => set(_getKey(key), value),
  };
};
