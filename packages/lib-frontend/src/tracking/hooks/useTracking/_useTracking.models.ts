import type { TrackingEventModel } from '@lib/shared/tracking/resources/TrackingEvent/TrackingEvent.models';

export interface _UseTrackingModel {
  identify(uid: string): void;
  initialize(apiKey: string): Promise<void>;
  reset(): void;
  track<TParams>(event: TrackingEventModel<TParams>): void;
}
