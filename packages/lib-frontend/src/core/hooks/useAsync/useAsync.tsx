import type {
  UseAsyncModel,
  UseAsyncParamsModel,
} from '@lib/frontend/core/hooks/useAsync/useAsync.models';
import { useEffect } from 'react';

export const useAsync = (...[params, deps = [], onUnmount]: UseAsyncParamsModel): UseAsyncModel => {
  useEffect(() => {
    let isMounted = true;
    params && params(() => isMounted);
    return () => {
      isMounted = false;
      onUnmount && onUnmount();
    };
  }, [...deps]);
};
