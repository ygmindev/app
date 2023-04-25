import type {
  UseAsyncModel,
  UseAsyncParamsModel,
} from '@lib/frontend/core/hooks/useAsync/useAsync.models';
import { useEffect } from 'react';

export const useAsync = (
  ...[{ onMount, onUnmount }, deps = []]: UseAsyncParamsModel
): UseAsyncModel => {
  useEffect(() => {
    let isMounted = true;
    onMount && onMount(() => isMounted);
    return () => {
      isMounted = false;
      onUnmount && onUnmount();
    };
  }, [...deps]);
};
