import {
  type TRACKING_EVENT_ACTION,
  type TRACKING_EVENT_OBJECT,
} from '@lib/shared/tracking/utils/TrackingEvent/TrackingEvent.constants';

export type TrackingEventActionModel = `${TRACKING_EVENT_ACTION}`;

export type TrackingEventObjectModel = `${TRACKING_EVENT_OBJECT}`;

export type TrackingEventModel<TParams = undefined> = {
  action: TrackingEventActionModel;
  object: TrackingEventObjectModel;
  params?: TParams;
};
