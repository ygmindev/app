import type { UseChangeParamsModel } from '@lib/frontend/core/hooks/useChange/useChange.models';
import { usePrevious } from '@lib/frontend/core/hooks/usePrevious/usePrevious';
import { isEqual } from 'lodash';
import { useEffect } from 'react';

export const useChange = <TType = unknown>({
  onChange,
  value,
}: UseChangeParamsModel<TType>): void => {
  const previous = usePrevious<TType>(value);
  useEffect(() => {
    !isEqual(value, previous) && onChange(previous);
  }, [value, previous, onChange]);
};
