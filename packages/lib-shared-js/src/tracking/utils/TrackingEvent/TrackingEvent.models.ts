import {
  type TRACKING_EVENT_ACTION,
  type TRACKING_EVENT_OBJECT,
} from '@lib/shared/tracking/utils/TrackingEvent/TrackingEvent.constants';

export type TrackingEventModel<TParams = undefined> = {
  action: TRACKING_EVENT_ACTION;
  object: TRACKING_EVENT_OBJECT;
  params?: TParams;
};
