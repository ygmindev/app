import type {
  _ReducerModel,
  _ReducerParamsModel,
} from '@lib/frontend/state/utils/reducer/_reducer.models';
import { useStore } from '@nanostores/react';
import { reduce } from 'lodash';
import { action, map } from 'nanostores';
import type { AllKeys } from 'nanostores/atom';

export const _reducer = <TType extends object, TValue extends object>({
  actions,
  initialState,
}: _ReducerParamsModel<TType, TValue>): _ReducerModel<TType, TValue> => {
  const _store = map<TType>(initialState);
  const _actions = reduce(
    actions,
    (result, v, k) => ({
      ...result,
      [k]: action(_store, k, (store, value) => {
        v(
          {
            get: <TKey extends keyof TType>(key: TKey) => store.get()[key],
            set: <TKey extends keyof TType>(key: TKey, value: TType[TKey]): void =>
              store.setKey(
                key as unknown as AllKeys<TType>,
                value as unknown as TType[AllKeys<TType>],
              ),
          },
          value,
        );
      }),
    }),
    {},
  );
  return { actions: _actions, useStore: () => useStore(_store) } as _ReducerModel<TType, TValue>;
};
