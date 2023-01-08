import type { SFCModel } from '@lib/frontend/core/core.models';
import { isSsr } from '@lib/frontend/platform/utils/isSsr/isSsr';
import { useTracking } from '@lib/frontend/tracking/hooks/useTracking/useTracking';
import type { TrackingProviderPropsModel } from '@lib/frontend/tracking/providers/TrackingProvider/TrackingProvider.models';
import { useEffect } from 'react';

export const TrackingProvider: SFCModel<TrackingProviderPropsModel> = ({ children }) => {
  const { initialize } = useTracking();

  useEffect(() => {
    if (!isSsr) {
      initialize(process.env.APP_AMPLITUDE_API_KEY);
    }
  }, [initialize]);

  return <>{children}</>;
};
