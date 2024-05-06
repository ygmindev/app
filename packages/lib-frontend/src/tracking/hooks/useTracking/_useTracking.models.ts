import { type TrackingEventModel } from '@lib/shared/tracking/resources/TrackingEvent/TrackingEvent.models';

export type _UseTrackingModel = {
  identify(uid: string): Promise<void>;
  initialize(apiKey: string): Promise<void>;
  reset(): Promise<void>;
  track<TParams = undefined>(event: TrackingEventModel<TParams>): Promise<void>;
};
