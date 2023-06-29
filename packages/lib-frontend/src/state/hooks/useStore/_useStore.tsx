import { useSelector } from 'react-redux';

import {
  type _UseStoreModel,
  type _UseStoreParamsModel,
} from '#lib-frontend/state/hooks/useStore/_useStore.models';

export const _useStore = <TType, TValue>(
  selector: _UseStoreParamsModel<TType, TValue>,
): _UseStoreModel<TValue> => useSelector<TType, TValue>(selector);
