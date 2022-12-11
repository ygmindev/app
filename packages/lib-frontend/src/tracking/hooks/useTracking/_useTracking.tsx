import type { _UseTrackingModel } from '@lib/frontend/tracking/hooks/useTracking/_useTracking.models';
import type { TrackingEventModel } from '@lib/shared/tracking/resources/TrackingEvent/TrackingEvent.models';
import type { AmplitudeClient } from 'amplitude-js';
// import { getInstance } from 'amplitude-js';
import { default as amplitude } from 'amplitude-js';

let _analyticsClient: AmplitudeClient | null;

export const _useTracking = (): _UseTrackingModel => ({
  identify: (uid) => _analyticsClient && _analyticsClient.setUserId(uid),

  initialize: async (apiKey) => {
    _analyticsClient = amplitude.getInstance();
    _analyticsClient.init(apiKey);
  },

  reset: () => _analyticsClient && _analyticsClient.setUserId(null),

  track: <TParams,>({ action, object, params }: TrackingEventModel<TParams>) =>
    _analyticsClient && _analyticsClient.logEvent(`${object} ${action}`, params),
});
