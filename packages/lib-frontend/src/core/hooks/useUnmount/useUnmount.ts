import type { UseUnmountParamsModel } from '@lib/frontend/core/hooks/useUnmount/useUnmount.models';
import { useEffect } from 'react';

export const useUnmount = (...[onUnmount]: UseUnmountParamsModel): void => {
  useEffect(
    () => () => {
      onUnmount();
    },
    [],
  );
};
