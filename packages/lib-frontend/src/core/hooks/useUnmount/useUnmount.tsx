import { useEffect } from 'react';

import {
  type UseUnmountModel,
  type UseUnmountParamsModel,
} from '#lib-frontend/core/hooks/useUnmount/useUnmount.models';

export const useUnmount = (params: UseUnmountParamsModel): UseUnmountModel => {
  useEffect(() => {
    return () => {
      params && params();
    };
  }, []);
};
