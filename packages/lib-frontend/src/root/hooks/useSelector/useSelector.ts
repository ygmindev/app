import type { RootStateModel } from '@lib/frontend/root/stores/reducer/reducer.models';
import { useSelector as _useSelector } from 'react-redux';

export const useSelector = <TType>(selector: (state: RootStateModel) => TType): TType =>
  _useSelector<RootStateModel, TType>(selector);
