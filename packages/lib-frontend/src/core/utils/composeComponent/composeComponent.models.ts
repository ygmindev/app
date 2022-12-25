import type { UseStylesParamsModel } from '@lib/frontend/style/hooks/useStyles/useStyles.models';
import type { ComponentType, ForwardedRef, RefObject } from 'react';

export interface ComposeComponentParamsModel<TProps, TResult, TRef = unknown>
  extends Pick<UseStylesParamsModel<TProps>, 'stylers'> {
  getComponent(props: TProps): ComponentType<TResult> | string;
  getProps?(props: TProps, ref?: ForwardedRef<RefObject<TRef>>): TResult;
  isWeb?: boolean;
}
