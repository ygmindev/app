import { type RootStateModel } from '@lib/frontend/root/stores/rootStore.models';
import {
  type _UseStoreModel,
  type _UseStoreParamsModel,
} from '@lib/frontend/state/hooks/useStore/_useStore.models';
import { type DeepKeyModel } from '@lib/shared/core/core.models';
import { type GetValueModel } from '@lib/shared/core/utils/getValue/getValue.models';

export type UseStoreParamsModel<TKey extends DeepKeyModel<RootStateModel>> = _UseStoreParamsModel<
  RootStateModel,
  TKey
>;

export type UseStoreModel<TKey extends DeepKeyModel<RootStateModel>> = [
  value: _UseStoreModel<RootStateModel, TKey> | undefined,
  valueSet: (params?: GetValueModel<RootStateModel, TKey>) => void,
  persistedState: _UseStoreModel<RootStateModel, TKey> | undefined,
];
