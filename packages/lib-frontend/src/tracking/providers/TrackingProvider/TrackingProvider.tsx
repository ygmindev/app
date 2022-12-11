import type { SFCModel } from '@lib/frontend/core/core.models';
import { useTracking } from '@lib/frontend/tracking/hooks/useTracking/useTracking';
import type { TrackingProviderPropsModel } from '@lib/frontend/tracking/providers/TrackingProvider/TrackingProvider.models';
import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
import { useEffect } from 'react';

const APP_AMPLITUDE_API_KEY = getEnv('APP_AMPLITUDE_API_KEY');

export const TrackingProvider: SFCModel<TrackingProviderPropsModel> = ({ children }) => {
  const { initialize } = useTracking();

  useEffect(() => {
    if (!import.meta.env.SSR) {
      initialize(APP_AMPLITUDE_API_KEY);
    }
  }, [initialize]);

  return <>{children}</>;
};
