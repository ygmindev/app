import { DefaultStateContext, StoreContext } from '@lib/frontend/root/containers/Root/context';
import { type RootStateModel } from '@lib/frontend/root/stores/rootStore.models';
import { useActions } from '@lib/frontend/state/hooks/useActions/useActions';
import { _useStore } from '@lib/frontend/state/hooks/useStore/_useStore';
import {
  type UseStoreModel,
  type UseStoreParamsModel,
} from '@lib/frontend/state/hooks/useStore/useStore.models';
import { type ActionModel } from '@lib/frontend/state/state.models';
import { type DeepKeyModel } from '@lib/shared/core/core.models';
import { getValue } from '@lib/shared/core/utils/getValue/getValue';
import { isArray } from '@lib/shared/core/utils/isArray/isArray';
import isPlainObject from 'lodash/isPlainObject';
import { useContext, useMemo } from 'react';

export const useStore = <TKey extends DeepKeyModel<RootStateModel>>(
  key: UseStoreParamsModel<TKey>,
): UseStoreModel<TKey> => {
  const defaultState = useContext(DefaultStateContext);
  const value = _useStore<RootStateModel, TKey>(key);
  const rootActions = useActions();
  const baseStore = useContext(StoreContext);

  return useMemo(() => {
    const defaultValue = getValue(defaultState, key);
    const actions = getValue(rootActions, key) as ActionModel<unknown>;
    const valueF = value === undefined ? defaultValue : value;
    const result = {
      get: () => baseStore && getValue(baseStore?.getState(), key),

      set: actions?.set,

      unset: actions?.unset,

      value: value === undefined ? defaultValue : value,
    } as UseStoreModel<TKey>;

    if (isArray(valueF)) {
      const arrayActions = actions as ActionModel<Array<unknown>>;
      (result as unknown as ActionModel<Array<unknown>>).add = arrayActions?.add;

      (result as unknown as ActionModel<Array<unknown>>).remove = arrayActions?.remove;
    } else if (isPlainObject(valueF)) {
      const objectActions = actions as ActionModel<Record<string, unknown>>;
      (result as unknown as ActionModel<Record<string, unknown>>).merge = objectActions?.merge;
    }

    return result;
  }, [baseStore, rootActions, defaultState, key, value]);
};
