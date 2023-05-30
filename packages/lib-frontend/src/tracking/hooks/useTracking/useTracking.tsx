import { _useTracking } from '@lib/frontend/tracking/hooks/useTracking/_useTracking';
import type { UseTrackingModel } from '@lib/frontend/tracking/hooks/useTracking/useTracking.models';
import { debug } from '@lib/shared/logging/utils/logger/logger';
import type { TrackingEventModel } from '@lib/shared/tracking/resources/TrackingEvent/TrackingEvent.models';

export const useTracking = (): UseTrackingModel => {
  const { identify, initialize, reset, track } = _useTracking();
  return {
    identify: (uid) =>
      process.env.NODE_ENV === 'production'
        ? identify(uid)
        : debug('[tracking] identify user', uid),

    initialize: async (apiKey) =>
      process.env.NODE_ENV === 'production' ? initialize(apiKey) : debug('[tracking] initialize'),

    reset: () => (process.env.NODE_ENV === 'production' ? reset() : debug('[tracking] reset')),

    track: <TParams,>({ action, object, params }: TrackingEventModel<TParams>) =>
      process.env.NODE_ENV === 'production'
        ? track<TParams>({ action, object, params })
        : debug('[tracking] track', object, action, params),
  };
};
