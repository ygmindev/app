import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { WithIconPropsModel } from '@lib/frontend/core/decorators/withIconProps/withIconProps.models';
import type { TranslationTextModel } from '@lib/frontend/locale/locale.models';
import type { CallableModel } from '@lib/shared/core/core.models';
import type { ReactElement } from 'react';

export interface _FallbackPropsModel<TError extends Error = Error> extends WithIconPropsModel {
  error?: TError;
  handleReset: CallableModel;
  message?: TranslationTextModel;
}

export interface _ErrorBoundaryPropsModel extends WithIconPropsModel, WithChildrenPropsModel {
  Fallback<TError extends Error = Error>(
    props: _FallbackPropsModel<TError>,
  ): ReactElement<_FallbackPropsModel<TError>>;
  message?: TranslationTextModel;
  onError?<TError extends Error = Error>(error: TError): void;
}
