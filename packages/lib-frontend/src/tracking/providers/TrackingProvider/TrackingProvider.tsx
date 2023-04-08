import type { SFCModel } from '@lib/frontend/core/core.models';
import { useChange } from '@lib/frontend/core/hooks/useChange/useChange';
import { isSsr } from '@lib/frontend/platform/utils/isSsr/isSsr';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useTracking } from '@lib/frontend/tracking/hooks/useTracking/useTracking';
import type { TrackingProviderPropsModel } from '@lib/frontend/tracking/providers/TrackingProvider/TrackingProvider.models';
import { useEffect } from 'react';

export const TrackingProvider: SFCModel<TrackingProviderPropsModel> = ({ children }) => {
  const { identify, initialize } = useTracking();
  const currentUser = useStore((state) => state.user.currentUser);

  useEffect(() => {
    if (!isSsr) {
      initialize(process.env.APP_AMPLITUDE_API_KEY);
    }
  }, [initialize]);

  useChange({
    onChange: () => currentUser && identify(currentUser._id),
    value: currentUser?._id,
  });

  return <>{children}</>;
};
