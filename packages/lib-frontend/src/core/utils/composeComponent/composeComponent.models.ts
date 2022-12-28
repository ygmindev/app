import type { PropsModel, SFCModel } from '@lib/frontend/core/core.models';
import type { UseStylesParamsModel } from '@lib/frontend/style/hooks/useStyles/useStyles.models';
import type { UseThemeModel } from '@lib/frontend/style/hooks/useTheme/useTheme.models';
import type { ComponentType, ForwardedRef, RefObject } from 'react';

export interface ComposeComponentParamsModel<TProps, TResult, TRef = unknown>
  extends Pick<UseStylesParamsModel<TProps>, 'stylers'> {
  getComponent(props: TProps): ComponentType<TResult> | string;
  getProps?(props: TProps, theme: UseThemeModel, ref?: ForwardedRef<RefObject<TRef>>): TResult;
  isWeb?: boolean;
}

export type ComposeComponentPropsModel<TProps> = PropsModel<
  SFCModel<
    TProps & {
      nativeID?: string;
    }
  >
>;
