import { type ProviderPropsModel } from '#lib-frontend/core/core.models';
import { type ERROR_MODE } from '#lib-frontend/core/providers/ErrorProvider/ErrorProvider.constants';
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

export type ErrorProviderContextModel = {
  errorContextGet?(error: Error): TranslatableErrorContextModel | undefined;
  errorContextSet(value: ErrorContextModel): void;
  mode: ErrorModeModel;
};

export type ErrorProviderPropsModel = ProviderPropsModel<
  Pick<ErrorProviderContextModel, 'mode' | 'errorContextGet'>
>;
