import { type SFCModel } from '@lib/frontend/core/core.models';
import { useChange } from '@lib/frontend/core/hooks/useChange/useChange';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useTracking } from '@lib/frontend/tracking/hooks/useTracking/useTracking';
import { type TrackingProviderPropsModel } from '@lib/frontend/tracking/containers/TrackingProvider/TrackingProvider.models';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import { isServer } from '@lib/shared/web/utils/isServer/isServer';
import { useEffect } from 'react';

export const TrackingProvider: SFCModel<TrackingProviderPropsModel> = ({ children }) => {
  const { identify, initialize } = useTracking();
  const [currentUser] = useStore('user.currentUser');

  useEffect(() => {
    if (!isServer) {
      process.env.APP_AMPLITUDE_API_KEY
        ? void initialize(process.env.APP_AMPLITUDE_API_KEY)
        : logger.warn('Tracking API key is missing');
    }
  }, [initialize]);

  useChange(currentUser?._id, () => currentUser?._id && void identify(currentUser._id));

  return <>{children}</>;
};
