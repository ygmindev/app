import type {
  _UseStoreModel,
  _UseStoreParamsModel,
} from '@lib/frontend/state/hooks/useStore/_useStore.models';
import { useSelector } from 'react-redux';

export const _useStore = <TType, TValue>(
  selector: _UseStoreParamsModel<TType, TValue>,
): _UseStoreModel<TValue> => useSelector<TType, TValue>(selector);
