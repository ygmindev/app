import {
  type NotificationDataModel,
  type NotificationModel,
} from '#lib-frontend/notification/notification.models';
import { type ReducerModel } from '#lib-frontend/state/state.models';
import { type PartialModel } from '#lib-shared/core/core.models';
import { type WithIdModel } from '#lib-shared/core/decorators/withId/withId.models';

export type NotificationStateModel = {
  notifications: Array<NotificationModel>;
};

export type NotificationActionsParamsModel = {
  add: NotificationDataModel;

  remove: string;

  update: PartialModel<NotificationModel> & WithIdModel;
};

export type NotificationReducerModel = ReducerModel<
  NotificationStateModel,
  NotificationActionsParamsModel
>;
