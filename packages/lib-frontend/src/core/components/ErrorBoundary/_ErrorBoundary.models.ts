import type { IconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import type { ChildrenPropsModel } from '@lib/frontend/core/core.models';
import type { CallableModel } from '@lib/shared/core/core.models';
import type { ComponentType } from 'react';

export interface _FallbackPropsModel<TError extends Error = Error>
  extends Pick<IconPropsModel, 'icon'> {
  error?: TError;
  handleReset: CallableModel;
}

export interface _ErrorBoundaryPropsModel<TError extends Error = Error> extends ChildrenPropsModel {
  Fallback?: ComponentType<_FallbackPropsModel<TError>>;
  onError?(error: TError): void;
}
