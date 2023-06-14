import type { ProviderPropsModel } from '#lib-frontend/core/core.models';
import type { ERROR_MODE } from '#lib-frontend/core/providers/ErrorProvider/ErrorProvider.constants';
import type {
  NotificationModel,
  TranslatableNotificationModel,
} from '#lib-frontend/notification/notification.models';

export type ErrorModeModel = `${ERROR_MODE}`;

export interface ErrorContextModel extends Pick<NotificationModel, 'icon' | 'title' | 'message'> {
  mode?: ErrorModeModel;
}

export interface TranslatableErrorContextModel
  extends Pick<TranslatableNotificationModel, 'icon' | 'title' | 'message'>,
    Pick<ErrorContextModel, 'mode'> {}

export interface ErrorProviderContextModel {
  errorContextGet?(error: Error): TranslatableErrorContextModel | undefined;
  errorContextSet(value: ErrorContextModel): void;
  mode: ErrorModeModel;
}

export interface ErrorProviderPropsModel
  extends ProviderPropsModel<Pick<ErrorProviderContextModel, 'mode' | 'errorContextGet'>> {}
