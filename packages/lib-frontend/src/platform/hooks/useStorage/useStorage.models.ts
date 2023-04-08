import type { _UseStorageModel } from '@lib/frontend/platform/hooks/useStorage/_useStorage.models';

export interface UseStorageModel<TType extends string = string> extends _UseStorageModel<TType> {
  value?: TType;
}
