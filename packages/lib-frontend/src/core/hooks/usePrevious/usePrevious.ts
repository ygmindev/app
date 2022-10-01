import type { UsePreviousParamsModel } from '@lib/frontend/core/hooks/usePrevious/usePrevious.models';
import { isNil } from 'lodash';
import { useEffect, useRef } from 'react';

export const usePrevious = <TType>(
  ...[value, isNotNil]: UsePreviousParamsModel<TType>
): TType | undefined => {
  const ref = useRef<TType>();
  useEffect(() => {
    if (!isNotNil || !isNil(value)) {
      ref.current = value;
    }
  }, [value, isNotNil]);
  return ref.current;
};
