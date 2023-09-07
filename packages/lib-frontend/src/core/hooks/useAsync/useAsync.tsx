import { useEffect } from 'react';

import {
  type UseAsyncModel,
  type UseAsyncParamsModel,
} from '#lib-frontend/core/hooks/useAsync/useAsync.models';

export const useAsync = (...[params, deps = []]: UseAsyncParamsModel): UseAsyncModel => {
  useEffect(() => {
    let isMounted = true;
    params && void params(() => isMounted);
    return () => {
      isMounted = false;
    };
  }, [...deps]);
};
