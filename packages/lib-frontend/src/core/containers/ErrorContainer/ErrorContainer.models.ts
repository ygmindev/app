import type { ERROR_CONTAINER_MODE } from '@lib/frontend/core/containers/ErrorContainer/ErrorContainer.constants';
import type { ChildrenPropsModel } from '@lib/frontend/core/core.models';
import type { NotificationModel } from '@lib/frontend/notification/components/Notification/Notification.models';

export type ErrorBoundaryModeModel = `${ERROR_CONTAINER_MODE}`;

export interface ErrorContainerPropsModel extends ChildrenPropsModel {
  getError?(error: Error): Pick<NotificationModel, 'icon' | 'message'> | undefined;
  mode: ErrorBoundaryModeModel;
}
