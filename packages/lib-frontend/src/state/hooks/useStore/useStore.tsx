import { useContext } from 'react';

import { defaultStateContext } from '#lib-frontend/root/containers/Root/Root.base';
import { type RootStateModel } from '#lib-frontend/root/stores/rootStore.models';
import { _useStore } from '#lib-frontend/state/hooks/useStore/_useStore';
import {
  type UseStoreModel,
  type UseStoreParamsModel,
} from '#lib-frontend/state/hooks/useStore/useStore.models';

export const useStore = <TValue,>(selector: UseStoreParamsModel<TValue>): UseStoreModel<TValue> => {
  const defaultState = useContext(defaultStateContext);
  const value = _useStore<RootStateModel, TValue>(selector);
  return value ?? selector(defaultState as RootStateModel);
};
