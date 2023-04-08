import type {
  TRACKING_EVENT_ACTION,
  TRACKING_EVENT_OBJECT,
} from '@lib/shared/tracking/resources/TrackingEvent/TrackingEvent.constants';

export type TrackingEventActionModel = `${TRACKING_EVENT_ACTION}`;

export type TrackingEventObjectModel = `${TRACKING_EVENT_OBJECT}`;

export interface TrackingEventModel<TParams = undefined> {
  action: TrackingEventActionModel;
  object: TrackingEventObjectModel;
  params?: TParams;
}
