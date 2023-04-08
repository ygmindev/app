import type {
  UseMountModel,
  UseMountParamsModel,
} from '@lib/frontend/core/hooks/useMount/useMount.models';
import { useEffect } from 'react';

export const useMount = (
  ...[{ onMount, onUnmount }, deps = []]: UseMountParamsModel
): UseMountModel => {
  useEffect(() => {
    let isMounted = true;
    onMount && onMount(() => isMounted);
    return () => {
      isMounted = false;
      onUnmount && onUnmount();
    };
  }, [...deps]);
};
