import type { WithStyleModel } from '@lib/frontend/style/decorators/withStyle/withStyle.models';
import type { UseStylesParamsModel } from '@lib/frontend/style/hooks/useStyles/useStyles.models';
import type { WithTestIdModel } from '@lib/frontend/test/test.models';
import type { ComponentType, ForwardedRef, RefObject } from 'react';

export interface ComposeComponentParamsModel<TProps, TResult, TRef = unknown>
  extends Pick<UseStylesParamsModel<TProps>, 'stylers'> {
  getComponent(props: TProps): ComponentType<TResult> | string;
  getProps?(props: TProps, ref?: ForwardedRef<RefObject<TRef>>): TResult;
  isWeb?: boolean;
}

export type ComposeComponentPropsModel<TProps> = TProps &
  WithTestIdModel &
  WithStyleModel & {
    nativeID?: string;
  };
