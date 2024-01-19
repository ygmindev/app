import { useSelector } from 'react-redux';

import {
  type _UseStoreModel,
  type _UseStoreParamsModel,
} from '@lib/frontend/state/hooks/useStore/_useStore.models';
import { type DeepKeyModel } from '@lib/shared/core/core.models';
import { getValue } from '@lib/shared/core/utils/getValue/getValue';

export const _useStore = <TType, TKey extends DeepKeyModel<TType>>(
  key: _UseStoreParamsModel<TType, TKey>,
): _UseStoreModel<TType, TKey> =>
  useSelector((state) => getValue(state, key)) as _UseStoreModel<TType, TKey>;
