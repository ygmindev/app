import { _useTracking } from '@lib/frontend/tracking/hooks/useTracking/_useTracking';
import { type UseTrackingModel } from '@lib/frontend/tracking/hooks/useTracking/useTracking.models';
import { debug } from '@lib/shared/logging/utils/Logger/Logger';
import { type TrackingEventModel } from '@lib/shared/tracking/resources/TrackingEvent/TrackingEvent.models';

export const useTracking = (): UseTrackingModel => {
  const { identify, initialize, reset, track } = _useTracking();
  return {
    identify: async (uid) =>
      process.env.NODE_ENV === 'production' ? identify(uid) : debug('identify user', uid),

    initialize: async (apiKey) =>
      process.env.NODE_ENV === 'production' ? initialize(apiKey) : debug('initialize'),

    reset: async () => (process.env.NODE_ENV === 'production' ? reset() : debug('reset')),

    track: async <TParams = undefined,>({ action, object, params }: TrackingEventModel<TParams>) =>
      process.env.NODE_ENV === 'production'
        ? track<TParams>({ action, object, params })
        : debug('track', object, action, params),
  };
};
