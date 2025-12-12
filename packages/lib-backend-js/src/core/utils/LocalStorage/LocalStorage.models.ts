import { type StringKeyModel } from '@lib/shared/core/core.models';

export type LocalStorageModel = {
  get<TKey extends StringKeyModel<LocalContextModel>>(
    key?: TKey,
  ): TKey extends string ? LocalContextModel[TKey] : LocalContextModel;

  run<TType extends unknown>(
    callback: () => Promise<TType>,
    context?: LocalContextModel,
  ): Promise<TType>;

  set<TKey extends StringKeyModel<LocalContextModel>>(
    key?: TKey,
    value?: LocalContextModel[TKey],
  ): void;
};

export type LocalContextModel = {
  ns?: string;
};
