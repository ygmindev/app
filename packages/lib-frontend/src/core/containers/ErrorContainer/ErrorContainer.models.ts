import type { ERROR_CONTAINER_MODE } from '@lib/frontend/core/containers/ErrorContainer/ErrorContainer.constants';
import type { ChildrenPropsModel } from '@lib/frontend/core/core.models';
import type { TranslatableNotificationModel } from '@lib/frontend/notification/notification.models';

export type ErrorBoundaryModeModel = `${ERROR_CONTAINER_MODE}`;

export interface ErrorContainerPropsModel extends ChildrenPropsModel {
  getError?(
    error: Error,
  ): Pick<TranslatableNotificationModel, 'icon' | 'title' | 'message'> | undefined;
  mode: ErrorBoundaryModeModel;
}
