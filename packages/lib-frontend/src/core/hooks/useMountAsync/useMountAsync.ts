import type { UseMountAsyncParamsModel } from '@lib/frontend/core/hooks/useMountAsync/useMountAsync.models';
import { useEffect } from 'react';

export const useMountAsync = <TResult>(
  { onMount, onSuccess }: UseMountAsyncParamsModel<TResult>,
  deps?: Array<unknown>,
): void => {
  let isMounted = false;
  useEffect(() => {
    isMounted = true;
    onMount &&
      onMount().then(
        (result: TResult | null) => isMounted && result !== null && onSuccess && onSuccess(result),
      );
    return () => {
      isMounted = false;
    };
  }, [onMount, onSuccess, ...(deps || [])]);
};
