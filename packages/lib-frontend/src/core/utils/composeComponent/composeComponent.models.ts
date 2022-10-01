import type { UseStylesParamsModel } from '@lib/frontend/styling/hooks/useStyles/useStyles.models';
import type { ComponentClass, ForwardedRef, FunctionComponent, RefObject } from 'react';

export interface ComposeComponentParamsModel<TParams, TResult, TRef = unknown>
  extends Pick<UseStylesParamsModel<TParams>, 'stylers'> {
  Component: FunctionComponent<TResult> | ComponentClass<TResult> | string;
  getProps?: (props: TParams, ref?: ForwardedRef<RefObject<TRef>>) => TResult;
  isWeb?: boolean;
}
