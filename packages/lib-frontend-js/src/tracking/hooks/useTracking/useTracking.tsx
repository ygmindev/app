import { _useTracking } from '@lib/frontend/tracking/hooks/useTracking/_useTracking';
import { type UseTrackingModel } from '@lib/frontend/tracking/hooks/useTracking/useTracking.models';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import { type TrackingEventModel } from '@lib/shared/tracking/utils/TrackingEvent/TrackingEvent.models';

export const useTracking = (): UseTrackingModel => {
  const { identify, initialize, reset, track } = _useTracking();
  return {
    identify: async (uid) =>
      process.env.NODE_ENV === 'production' ? identify(uid) : logger.debug('identify user', uid),

    initialize: async (apiKey) =>
      process.env.NODE_ENV === 'production' ? initialize(apiKey) : logger.debug('initialize'),

    reset: async () => (process.env.NODE_ENV === 'production' ? reset() : logger.debug('reset')),

    track: async <TParams = undefined,>({ action, object, params }: TrackingEventModel<TParams>) =>
      process.env.NODE_ENV === 'production'
        ? track<TParams>({ action, object, params })
        : logger.debug('track', object, action, params),
  };
};
