import { type RootStateModel } from '#lib-frontend/root/stores/rootStore.models';
import { _useStore } from '#lib-frontend/state/hooks/useStore/_useStore';
import {
  type UseStoreModel,
  type UseStoreParamsModel,
} from '#lib-frontend/state/hooks/useStore/useStore.models';

export const useStore = <TValue,>(selector: UseStoreParamsModel<TValue>): UseStoreModel<TValue> =>
  _useStore<RootStateModel, TValue>(selector);
