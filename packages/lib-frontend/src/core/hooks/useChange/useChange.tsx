import { useEffect } from 'react';

import { _useChange } from '@lib/frontend/core/hooks/useChange/_useChange';
import {
  type UseChangeModel,
  type UseChangeParamsModel,
} from '@lib/frontend/core/hooks/useChange/useChange.models';

export const useChange = <TType extends unknown>(
  ...[value, onChange]: UseChangeParamsModel<TType>
): UseChangeModel<TType> => {
  const previous = _useChange<TType>(value);
  useEffect(() => {
    onChange && onChange(previous);
  }, [previous]);
  return previous;
};
