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
        : debug(`[Tracking] identify user: ${uid}`),

    initialize: async (apiKey) =>
      process.env.NODE_ENV === 'production' ? initialize(apiKey) : debug('[Tracking] initialize'),

    reset: () => (process.env.NODE_ENV === 'production' ? reset() : debug('[Tracking] reset')),

    track: <TParams,>({ action, object, params }: TrackingEventModel<TParams>) =>
      process.env.NODE_ENV === 'production'
        ? track<TParams>({ action, object, params })
        : debug(`[Tracking] track: ${object} ${action} ${params ? JSON.stringify(params) : ''}`),
  };
};
