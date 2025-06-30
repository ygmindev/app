import { type TrackingEventModel } from '@lib/shared/tracking/utils/TrackingEvent/TrackingEvent.models';

export type _UseTrackingModel = {
  identify(uid: string): Promise<void>;
  initialize(apiKey: string): Promise<void>;
  reset(): Promise<void>;
  track<TParams = undefined>(event: TrackingEventModel<TParams>): Promise<void>;
};
