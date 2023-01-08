import type { UseStylesParamsModel } from '@lib/frontend/style/hooks/useStyles/useStyles.models';
import type { UseThemeModel } from '@lib/frontend/style/hooks/useTheme/useTheme.models';
import type { StyleModel, StylePropsModel, ViewStyleModel } from '@lib/frontend/style/style.models';
import type { TestIdPropsModel } from '@lib/frontend/test/test.models';
import type { ComponentType, ForwardedRef, ForwardRefExoticComponent, RefObject } from 'react';

export interface ComposeComponentParamsModel<
  TProps,
  TResult,
  TStyle extends StyleModel = ViewStyleModel,
  TRef = unknown,
> extends Pick<UseStylesParamsModel<TProps, TStyle>, 'stylers'> {
  getComponent(props: TProps): ComponentType<TResult & StylePropsModel<TStyle>> | string;

  getProps?(
    props: TProps & TestIdPropsModel & StylePropsModel<TStyle>,
    theme: UseThemeModel,
    ref?: ForwardedRef<RefObject<TRef>>,
  ): TResult;

  isWeb?: boolean;
}

export type ComposeComponentModel<
  TProps,
  TStyle extends StyleModel = ViewStyleModel,
> = ForwardRefExoticComponent<
  TProps & StylePropsModel<TStyle> & { nativeID?: string; testID?: string }
>;
