import { Amplitude } from '@amplitude/react-native';
import type { _UseTrackingModel } from '@lib/frontend/tracking/hooks/useTracking/_useTracking.models';
import type { TrackingEventModel } from '@lib/shared/tracking/resources/TrackingEvent/TrackingEvent.models';

let _analyticsClient: Amplitude | null;

export const _useTracking = (): _UseTrackingModel => ({
  identify: (uid) => _analyticsClient && _analyticsClient.setUserId(uid),

  initialize: async (apiKey) => {
    _analyticsClient = Amplitude.getInstance();
    await _analyticsClient.init(apiKey);
  },

  reset: () => _analyticsClient && _analyticsClient.setUserId(null),

  track: <TParams,>({ action, object, params }: TrackingEventModel<TParams>) =>
    _analyticsClient &&
    _analyticsClient.logEvent(`${object} ${action}`, params as Record<string, unknown>),
});
