import { type RootStateModel } from '@lib/frontend/root/stores/rootStore.models';
import { type DeepKeyModel } from '@lib/shared/core/core.models';
import { type GetValueModel } from '@lib/shared/core/utils/getValue/getValue.models';

export type UseStoreParamsModel<TKey extends DeepKeyModel<RootStateModel>> = TKey;

export type UseStoreModel<TKey extends DeepKeyModel<RootStateModel>> = [
  value: GetValueModel<RootStateModel, TKey>,
  setter: (params?: GetValueModel<RootStateModel, TKey>) => void,
  getter: () => GetValueModel<RootStateModel, TKey>,
];
