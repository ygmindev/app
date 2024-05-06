import { useEffect } from 'react';

import { type SFCModel } from '@lib/frontend/core/core.models';
import { useChange } from '@lib/frontend/core/hooks/useChange/useChange';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useTracking } from '@lib/frontend/tracking/hooks/useTracking/useTracking';
import { type TrackingProviderPropsModel } from '@lib/frontend/tracking/providers/TrackingProvider/TrackingProvider.models';
import { isServer } from '@lib/platform/core/utils/isServer/isServer';
import { warn } from '@lib/shared/logging/utils/logger/logger';

export const TrackingProvider: SFCModel<TrackingProviderPropsModel> = ({ children }) => {
  const { identify, initialize } = useTracking();
  const [currentUser] = useStore('user.currentUser');

  useEffect(() => {
    if (!isServer) {
      process.env.APP_AMPLITUDE_API_KEY
        ? void initialize(process.env.APP_AMPLITUDE_API_KEY)
        : warn('Tracking API key is missing');
    }
  }, [initialize]);

  useChange(currentUser?._id, () => currentUser?._id && void identify(currentUser._id));

  return <>{children}</>;
};
