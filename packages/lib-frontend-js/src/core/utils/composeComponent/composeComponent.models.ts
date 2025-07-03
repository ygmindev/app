import {
  type RefPropsModel,
  type RSFCModel,
  type RSFCPropsModel,
} from '@lib/frontend/core/core.models';
import { type UseStylesParamsModel } from '@lib/frontend/style/hooks/useStyles/useStyles.models';
import { type UseThemeModel } from '@lib/frontend/style/hooks/useTheme/useTheme.models';
import { type StyleModel, type ViewStyleModel } from '@lib/frontend/style/style.models';
import { type TestIdPropsModel } from '@lib/frontend/test/test.models';
import { type ComponentType } from 'react';

export type ComposeComponentParamsModel<
  TProps,
  TResult,
  TStyle extends StyleModel = ViewStyleModel,
  TRef = unknown,
> = {
  Component:
    | RSFCModel<TRef, TResult, TStyle>
    | ComponentType<TResult & RefPropsModel<TRef>>
    | string;

  isWeb?: boolean;

  getProps?(
    props: RSFCPropsModel<TRef, TProps & TestIdPropsModel, TStyle>,
    theme: UseThemeModel,
  ): TResult | null;
} & Pick<UseStylesParamsModel<TProps, TStyle>, 'stylers'>;

export type ComposeComponentModel<
  TProps,
  TStyle extends StyleModel = ViewStyleModel,
  TRef = unknown,
> = RSFCModel<TRef, TProps, TStyle>;
