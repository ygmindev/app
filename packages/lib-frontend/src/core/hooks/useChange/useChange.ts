import type { UseChangeParamsModel } from '@lib/frontend/core/hooks/useChange/useChange.models';
import { usePrevious } from '@lib/frontend/core/hooks/usePrevious/usePrevious';
import { debounce } from '@lib/shared/core/utils/debounce/debounce';
import { isEqual } from '@lib/shared/core/utils/isEqual/isEqual';
import { useEffect } from 'react';

export const useChange = <TType = unknown>({
  onChange,
  value,
}: UseChangeParamsModel<TType>): void => {
  const previous = usePrevious<TType>(value);
  const _onChange = debounce({ callback: onChange });
  useEffect(() => {
    !isEqual(value, previous) && _onChange(previous);
  }, [value, previous, _onChange]);
};
