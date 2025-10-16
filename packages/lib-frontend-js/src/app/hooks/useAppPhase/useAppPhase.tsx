import { APP_PHASE } from '@lib/frontend/app/hooks/useAppPhase/useAppPhase.constants';
import { type UseAppPhaseModel } from '@lib/frontend/app/hooks/useAppPhase/useAppPhase.models';
import { useEffect } from 'react';

let isHydrated = false;

export const useAppPhase = (): UseAppPhaseModel => {
  useEffect(() => {
    if (!isHydrated) {
      isHydrated = true;
    }
  }, []);

  return isHydrated ? APP_PHASE.CLIENT_SIDE_NAVIGATION : APP_PHASE.CLIENT_SIDE_HYDRATION;
};
