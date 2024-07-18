import {
  defaultStateContext,
  persistedStateContext,
} from '@lib/frontend/root/containers/Root/context';
import { type RootStateModel } from '@lib/frontend/root/stores/rootStore.models';
import { useActions } from '@lib/frontend/state/hooks/useActions/useActions';
import { _useStore } from '@lib/frontend/state/hooks/useStore/_useStore';
import {
  type UseStoreModel,
  type UseStoreParamsModel,
} from '@lib/frontend/state/hooks/useStore/useStore.models';
import { type DeepKeyModel } from '@lib/shared/core/core.models';
import { type _GetValueModel } from '@lib/shared/core/utils/getValue/_getValue.models';
import { getValue } from '@lib/shared/core/utils/getValue/getValue';
import { isEmpty } from '@lib/shared/core/utils/isEmpty/isEmpty';
import { useContext } from 'react';

export const useStore = <TKey extends DeepKeyModel<RootStateModel>>(
  key: UseStoreParamsModel<TKey>,
): UseStoreModel<TKey> => {
  const defaultState = useContext(defaultStateContext);
  const persistedState = useContext(persistedStateContext);
  const value = _useStore<RootStateModel, TKey>(key);
  const actions = useActions();
  const defaultValue = getValue(defaultState, key);
  return [
    isEmpty(value) ? defaultValue : value,
    getValue(actions, `${key}Set`) as (params?: _GetValueModel<RootStateModel, TKey>) => void,
    getValue(persistedState, key),
  ];
};
