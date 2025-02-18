import {
  type UseAsyncModel,
  type UseAsyncParamsModel,
} from '@lib/frontend/core/hooks/useAsync/useAsync.models';
import { useEffect } from 'react';

export const useAsync = (...[params, deps = []]: UseAsyncParamsModel): UseAsyncModel => {
  useEffect(() => {
    let isMounted = true;
    const result = params?.(() => isMounted);
    return () => {
      isMounted = false;
      void result?.then((onUnmount) => onUnmount?.());
    };
  }, [...deps]);
};
