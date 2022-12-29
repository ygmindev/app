import type { IconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import type { ChildrenPropsModel } from '@lib/frontend/core/core.models';
import type { CallableModel } from '@lib/shared/core/core.models';
import type { ReactElement } from 'react';

export interface _FallbackPropsModel<TError extends Error = Error>
  extends Pick<IconPropsModel, 'icon'> {
  error?: TError;
  handleReset: CallableModel;
}

export interface _ErrorBoundaryPropsModel extends ChildrenPropsModel {
  Fallback?<TError extends Error = Error>(
    props: _FallbackPropsModel<TError>,
  ): ReactElement<_FallbackPropsModel<TError>>;
  onError?<TError extends Error = Error>(error: TError): void;
}
