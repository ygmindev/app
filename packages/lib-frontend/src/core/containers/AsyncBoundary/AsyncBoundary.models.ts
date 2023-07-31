import { type ReactElement } from 'react';

import { type ERROR_MODE } from '#lib-frontend/core/containers/AsyncBoundary/AsyncBoundary.constants';
import { type ChildrenPropsModel } from '#lib-frontend/core/core.models';
import {
  type NotificationModel,
  type TranslatableNotificationModel,
} from '#lib-frontend/notification/notification.models';

export type ErrorModeModel = `${ERROR_MODE}`;

export type ErrorContextModel = {
  errorMode?: ErrorModeModel;
} & Pick<NotificationModel, 'icon' | 'title' | 'message'>;

export type TranslatableErrorContextModel = Pick<
  TranslatableNotificationModel,
  'icon' | 'title' | 'message'
> &
  Pick<ErrorContextModel, 'errorMode'>;

export type AsyncBoundaryContextModel = {
  errorContextGet?(error: Error): TranslatableErrorContextModel | undefined;
  errorContextSet(value: ErrorContextModel): void;
  errorMode?: ErrorModeModel;
  handleRefresh(): void;
};

export type AsyncBoundaryPropsModel = ChildrenPropsModel &
  Pick<AsyncBoundaryContextModel, 'errorMode' | 'errorContextGet'> & {
    fallback?: ReactElement;
    onRefresh?(): Promise<void>;
  };
