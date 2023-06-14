import type { SFCModel } from '#lib-frontend/core/core.models';
import { useChange } from '#lib-frontend/core/hooks/useChange/useChange';
import { useStore } from '#lib-frontend/state/hooks/useStore/useStore';
import { useTracking } from '#lib-frontend/tracking/hooks/useTracking/useTracking';
import type { TrackingProviderPropsModel } from '#lib-frontend/tracking/providers/TrackingProvider/TrackingProvider.models';
import { useEffect } from 'react';

import { isSsr } from '#lib-platform/core/utils/isSsr/isSsr';

export const TrackingProvider: SFCModel<TrackingProviderPropsModel> = ({ children }) => {
  const { identify, initialize } = useTracking();
  const currentUser = useStore((state) => state.user.currentUser);

  useEffect(() => {
    if (!isSsr) {
      initialize(process.env.APP_AMPLITUDE_API_KEY);
    }
  }, [initialize]);

  useChange(currentUser?._id, () => currentUser && identify(currentUser._id));

  return <>{children}</>;
};
