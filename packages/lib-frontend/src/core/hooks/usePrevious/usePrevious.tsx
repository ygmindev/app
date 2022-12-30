import { _usePrevious } from '@lib/frontend/core/hooks/usePrevious/_usePrevious';
import type {
  UsePreviousModel,
  UsePreviousParamsModel,
} from '@lib/frontend/core/hooks/usePrevious/usePrevious.models';
import { useEffect } from 'react';

export const usePrevious = <TType extends unknown>({
  onChange,
  value,
}: UsePreviousParamsModel<TType>): UsePreviousModel<TType> => {
  const previous = _usePrevious<TType>({ value });
  useEffect(() => {
    onChange && onChange(previous);
  }, [previous]);
  return previous;
};
