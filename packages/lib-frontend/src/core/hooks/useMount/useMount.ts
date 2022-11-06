import type { UseMountParamsModel } from '@lib/frontend/core/hooks/useMount/useMount.models';
import { useEffect, useState } from 'react';

export const useMount = (
  { onMount, onUnmount }: UseMountParamsModel = {},
  deps?: Array<unknown>,
): boolean => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  useEffect(() => {
    setIsMounted(true);
    onMount && onMount();
    return () => {
      setIsMounted(false);
      onUnmount && onUnmount();
    };
  }, [isMounted, setIsMounted, ...(deps || [])]);
  return isMounted;
};
