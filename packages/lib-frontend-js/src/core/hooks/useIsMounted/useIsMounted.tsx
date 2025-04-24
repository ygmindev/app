import { type UseIsMountedModel } from '@lib/frontend/core/hooks/useIsMounted/useIsMounted.models';
import { useCallback, useEffect, useRef } from 'react';

export const useIsMounted = (): UseIsMountedModel => {
  const ref = useRef(false);
  const isMounted = useCallback(() => ref.current, []);

  useEffect(() => {
    ref.current = true;
    return () => {
      void (ref.current = false);
    };
  }, []);

  return isMounted;
};
