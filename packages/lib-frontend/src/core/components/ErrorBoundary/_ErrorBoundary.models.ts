import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { WithIconPropsModel } from '@lib/frontend/core/decorators/withIconProps/withIconProps.models';
import type { CallableModel } from '@lib/shared/core/core.models';
import type { ReactElement } from 'react';

export interface _FallbackPropsModel<TError extends Error = Error> extends WithIconPropsModel {
  error?: TError;
  handleReset: CallableModel;
}

export interface _ErrorBoundaryPropsModel extends WithChildrenPropsModel {
  Fallback<TError extends Error = Error>(
    props: _FallbackPropsModel<TError>,
  ): ReactElement<_FallbackPropsModel<TError>>;
  onError?<TError extends Error = Error>(error: TError): void;
}
