import {
  type UseAsyncModel,
  type UseAsyncParamsModel,
} from '@lib/frontend/core/hooks/useAsync/useAsync.models';
import { useCallback, useEffect, useRef } from 'react';

export const useAsync = (...[params, deps = []]: UseAsyncParamsModel): UseAsyncModel => {
  const ref = useRef(true);
  const isMounted = useCallback(() => ref.current, []);

  useEffect(() => {
    void params?.(isMounted);
    console.info('mounted');
    return () => {
      console.info('unmount');
      ref.current = false;
    };
  }, [...deps]);
};
