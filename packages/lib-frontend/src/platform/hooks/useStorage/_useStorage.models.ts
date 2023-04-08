import type { CallablePromiseModel } from '@lib/shared/core/core.models';

export interface _UseStorageModel<TType extends string = string> {
  clear: CallablePromiseModel;
  get(key: string): Promise<TType>;
  remove(key: string): Promise<void>;
  set(key: string, value: TType): Promise<void>;
}
