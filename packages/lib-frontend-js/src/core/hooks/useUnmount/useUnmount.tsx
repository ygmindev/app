import {
  type UseUnmountModel,
  type UseUnmountParamsModel,
} from '@lib/frontend/core/hooks/useUnmount/useUnmount.models';
import { useEffect } from 'react';

export const useUnmount = (params: UseUnmountParamsModel): UseUnmountModel => {
  useEffect(() => {
    return () => {
      params?.();
    };
  }, []);
};
