import type {
  NotificationDataModel,
  NotificationModel,
} from '@lib/frontend/notification/notification.models';
import type { ReducerModel } from '@lib/frontend/state/state.models';
import type { PartialModel } from '@lib/shared/core/core.models';
import type { WithIdModel } from '@lib/shared/core/decorators/withId/withId.models';

export interface NotificationStateModel {
  notifications: Array<NotificationModel>;
}

export interface NotificationActionsParamsModel {
  add: NotificationDataModel;

  remove: string;

  update: PartialModel<NotificationModel> & WithIdModel;
}

export interface NotificationReducerModel
  extends ReducerModel<NotificationStateModel, NotificationActionsParamsModel> {}
