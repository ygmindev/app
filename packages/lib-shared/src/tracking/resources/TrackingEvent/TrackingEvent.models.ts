import type { TRACKING_EVENT_ACTION } from '@lib/shared/tracking/resources/TrackingEvent/TrackingEvent.constants';

export type TrackingEventActionModel = `${TRACKING_EVENT_ACTION}`;

export interface TrackingEventModel<TParams> {
  action: TrackingEventActionModel;
  object: string;
  params?: TParams;
}
