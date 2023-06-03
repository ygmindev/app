import type { _UseTrackingModel } from '@lib/frontend/tracking/hooks/useTracking/_useTracking.models';
import type { TrackingEventModel } from '@lib/shared/tracking/resources/TrackingEvent/TrackingEvent.models';
import type { AmplitudeClient } from 'amplitude-js';
// import { getInstance } from 'amplitude-js';
import { default as amplitude } from 'amplitude-js';

let client: AmplitudeClient | null;

export const _useTracking = (): _UseTrackingModel => ({
  identify: (uid) => client && client.setUserId(uid),

  initialize: async (apiKey) => {
    client = amplitude.getInstance();
    client.init(apiKey);
  },

  reset: () => client && client.setUserId(null),

  track: <TParams,>({ action, object, params }: TrackingEventModel<TParams>) =>
    client && client.logEvent(`${object} ${action}`, params),
});
