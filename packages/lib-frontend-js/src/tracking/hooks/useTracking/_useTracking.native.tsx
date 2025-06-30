import { Amplitude } from '@amplitude/react-native';

import { type _UseTrackingModel } from '@lib/frontend/tracking/hooks/useTracking/_useTracking.models';
import { type TrackingEventModel } from '@lib/model/tracking/TrackingEvent/TrackingEvent.models';

let client: Amplitude | null;

export const _useTracking = (): _UseTrackingModel => ({
  identify: async (uid) => {
    client && (await client.setUserId(uid));
  },

  initialize: async (apiKey) => {
    client = Amplitude.getInstance();
    await client.init(apiKey);
  },

  reset: async () => {
    client && (await client.setUserId(null));
  },

  track: async <TParams = undefined,>({ action, object, params }: TrackingEventModel<TParams>) => {
    client && (await client.logEvent(`${object} ${action}`, params as Record<string, unknown>));
  },
});
