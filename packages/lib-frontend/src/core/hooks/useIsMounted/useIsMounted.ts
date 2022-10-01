import type { UseIsMountedParamsModel } from '@lib/frontend/core/hooks/useIsMounted/useIsMounted.models';
import { useEffect, useState } from 'react';

export const useIsMounted = (
  { onMount, onUnmount }: UseIsMountedParamsModel = {},
  deps?: unknown[],
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
