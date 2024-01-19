import { type NotificationModel } from '@lib/frontend/notification/notification.models';
import { type ReducerModel } from '@lib/frontend/state/state.models';
import { type EmptyObjectModel } from '@lib/shared/core/core.models';

export type NotificationStateModel = {
  notifications: Array<NotificationModel>;
};

export type NotificationActionsParamsModel = EmptyObjectModel;

export type NotificationReducerModel = ReducerModel<
  NotificationStateModel,
  NotificationActionsParamsModel
>;
