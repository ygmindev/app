import { DefaultStateContext, StoreContext } from '@lib/frontend/root/containers/Root/context';
import { type RootStateModel } from '@lib/frontend/root/stores/rootStore.models';
import { useActions } from '@lib/frontend/state/hooks/useActions/useActions';
import { _useStore } from '@lib/frontend/state/hooks/useStore/_useStore';
import {
  type UseStoreModel,
  type UseStoreParamsModel,
} from '@lib/frontend/state/hooks/useStore/useStore.models';
import { type ActionModel } from '@lib/frontend/state/state.models';
import { type StringKeyModel, type DeepKeyModel } from '@lib/shared/core/core.models';
import { getValue } from '@lib/shared/core/utils/getValue/getValue';
import { type GetValueModel } from '@lib/shared/core/utils/getValue/getValue.models';
import { useCallback, useContext } from 'react';

export const useStore = <TKey extends DeepKeyModel<RootStateModel>>(
  key: UseStoreParamsModel<TKey>,
): UseStoreModel<TKey> => {
  const defaultStateContext = useContext(DefaultStateContext);
  const storeContext = useContext(StoreContext);
  const actions = useActions();
  const value = _useStore<RootStateModel, TKey>(key);

  const setter = useCallback(
    (value: GetValueModel<RootStateModel, TKey>) => {
      type StoreNameModel = StringKeyModel<RootStateModel>;
      type StoreModel = RootStateModel[StoreNameModel];
      const idx = key.indexOf('.');
      if (idx === -1) {
        return (actions[key as StoreNameModel] as ActionModel<StoreModel>).set('', value);
      }
      const [storeName, path] = [
        key.slice(0, idx) as StoreNameModel,
        key.slice(idx + 1) as DeepKeyModel<StoreModel>,
      ];
      const store = actions[storeName] as ActionModel<StoreModel>;
      return store.set(path, value);
    },
    [actions, key],
  );

  const getter = useCallback(
    () => storeContext && getValue(storeContext.getState(), key),
    [key, storeContext],
  );

  return [
    value === undefined ? getValue(defaultStateContext, key) : value,
    setter,
    getter,
  ] as UseStoreModel<TKey>;
};
