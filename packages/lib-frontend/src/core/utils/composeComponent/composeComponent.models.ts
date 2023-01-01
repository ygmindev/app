import type { UseStylesParamsModel } from '@lib/frontend/style/hooks/useStyles/useStyles.models';
import type { UseThemeModel } from '@lib/frontend/style/hooks/useTheme/useTheme.models';
import type { StylePropsModel } from '@lib/frontend/style/style.models';
import type { TestIdPropsModel } from '@lib/frontend/test/test.models';
import type {
  Component,
  ComponentType,
  ForwardedRef,
  ForwardRefExoticComponent,
  RefObject,
} from 'react';

export interface ComposeComponentParamsModel<TProps, TResult, TRef = unknown>
  extends Pick<UseStylesParamsModel<TProps>, 'stylers'> {
  getComponent(
    props: TProps,
  ): ComponentType<TResult & StylePropsModel> | Component<TResult & StylePropsModel> | string;
  getProps?(
    props: TProps & TestIdPropsModel & StylePropsModel,
    theme: UseThemeModel,
    ref?: ForwardedRef<RefObject<TRef>>,
  ): TResult;
  isWeb?: boolean;
}

export type ComposeComponentModel<TProps> = ForwardRefExoticComponent<
  TProps & StylePropsModel & { nativeID?: string; testID?: string }
>;
