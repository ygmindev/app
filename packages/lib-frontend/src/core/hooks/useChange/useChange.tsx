import { _useChange } from '@lib/frontend/core/hooks/useChange/_useChange';
import type {
  UseChangeModel,
  UseChangeParamsModel,
} from '@lib/frontend/core/hooks/useChange/useChange.models';
import { useEffect } from 'react';

export const useChange = <TType extends unknown>({
  onChange,
  value,
}: UseChangeParamsModel<TType>): UseChangeModel<TType> => {
  const previous = _useChange<TType>({ value });
  useEffect(() => {
    onChange && onChange(previous);
  }, [previous]);
  return previous;
};
