import { type RSFCModel } from '@lib/frontend/core/core.models';
import { type UseStylesParamsModel } from '@lib/frontend/style/hooks/useStyles/useStyles.models';
import { type UseThemeModel } from '@lib/frontend/style/hooks/useTheme/useTheme.models';
import {
  type StyleModel,
  type StylePropsModel,
  type ViewStyleModel,
} from '@lib/frontend/style/style.models';
import { type TestIdPropsModel } from '@lib/frontend/test/test.models';
import { type ComponentType, type ForwardedRef } from 'react';

export type ComposeComponentParamsModel<
  TProps,
  TResult,
  TStyle extends StyleModel = ViewStyleModel,
  TRef = unknown,
> = {
  Component: ComponentType<TResult & StylePropsModel<TStyle>> | string;

  getProps?(
    props: TProps & TestIdPropsModel & { style?: TStyle },
    theme: UseThemeModel,
    ref?: ForwardedRef<TRef>,
  ): TResult | null;

  isWeb?: boolean;
} & Pick<UseStylesParamsModel<TProps, TStyle>, 'stylers'>;

export type ComposeComponentModel<
  TProps,
  TStyle extends StyleModel = ViewStyleModel,
  TRef = unknown,
> = RSFCModel<TRef, TProps, TStyle>;
