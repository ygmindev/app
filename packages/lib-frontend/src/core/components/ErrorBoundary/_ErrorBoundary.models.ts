import type { IconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import type { ChildrenPropsModel } from '@lib/frontend/core/core.models';
import type { CallableModel } from '@lib/shared/core/core.models';
import type { ComponentType } from 'react';

export interface _FallbackPropsModel extends Pick<IconPropsModel, 'icon'> {
  error?: Error;
  handleReset: CallableModel;
}

export interface _ErrorBoundaryPropsModel extends ChildrenPropsModel {
  Fallback?: ComponentType<_FallbackPropsModel>;
  onError?(error: Error): void;
}
