import { type ERROR_MODE } from '#lib-frontend/core/containers/ErrorBoundary/ErrorBoundary.constants';
import { type ChildrenPropsModel } from '#lib-frontend/core/core.models';
import {
  type NotificationModel,
  type TranslatableNotificationModel,
} from '#lib-frontend/notification/notification.models';

export type ErrorModeModel = `${ERROR_MODE}`;

export type ErrorContextModel = {
  mode?: ErrorModeModel;
} & Pick<NotificationModel, 'icon' | 'title' | 'message'>;

export type TranslatableErrorContextModel = Pick<
  TranslatableNotificationModel,
  'icon' | 'title' | 'message'
> &
  Pick<ErrorContextModel, 'mode'>;

export type ErrorBoundaryContextModel = {
  errorContextGet?(error: Error): TranslatableErrorContextModel | undefined;
  errorContextSet(value: ErrorContextModel): void;
  mode: ErrorModeModel;
};

export type ErrorBoundaryPropsModel = ChildrenPropsModel &
  Pick<ErrorBoundaryContextModel, 'mode' | 'errorContextGet'>;
