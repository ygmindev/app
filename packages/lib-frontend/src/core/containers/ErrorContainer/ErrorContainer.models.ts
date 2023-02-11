import type { ERROR_CONTAINER_MODE } from '@lib/frontend/core/containers/ErrorContainer/ErrorContainer.constants';
import type { ChildrenPropsModel } from '@lib/frontend/core/core.models';

export type ErrorBoundaryModeModel = `${ERROR_CONTAINER_MODE}`;

export interface ErrorContainerPropsModel extends ChildrenPropsModel {
  mode?: ErrorBoundaryModeModel;
}
