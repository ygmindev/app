import type { TrackingEventModel } from '#lib-shared/tracking/resources/TrackingEvent/TrackingEvent.models';

export type _UseTrackingModel = {
  identify(uid: string): void;
  initialize(apiKey: string): Promise<void>;
  reset(): void;
  track<TParams = undefined>(event: TrackingEventModel<TParams>): void;
};
