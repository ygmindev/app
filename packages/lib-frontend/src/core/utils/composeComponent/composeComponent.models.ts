import type { RSFCModel } from '#lib-frontend/core/core.models';
import type { UseStylesParamsModel } from '#lib-frontend/style/hooks/useStyles/useStyles.models';
import type { UseThemeModel } from '#lib-frontend/style/hooks/useTheme/useTheme.models';
import type { StyleModel, StylePropsModel, ViewStyleModel } from '#lib-frontend/style/style.models';
import type { TestIdPropsModel } from '#lib-frontend/test/test.models';
import type { ComponentType, ForwardedRef } from 'react';

export interface ComposeComponentParamsModel<
  TProps,
  TResult,
  TStyle extends StyleModel = ViewStyleModel,
  TRef = unknown,
> extends Pick<UseStylesParamsModel<TProps, TStyle>, 'stylers'> {
  Component: ComponentType<TResult & StylePropsModel<TStyle>> | string;

  getProps?(
    props: TProps & TestIdPropsModel & { style?: TStyle },
    theme: UseThemeModel,
    ref?: ForwardedRef<TRef>,
  ): TResult | null;

  isWeb?: boolean;
}

export type ComposeComponentModel<
  TProps,
  TStyle extends StyleModel = ViewStyleModel,
  TRef = unknown,
> = RSFCModel<TRef, TProps, TStyle>;
