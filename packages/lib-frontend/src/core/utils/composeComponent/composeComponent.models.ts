import type { PropsModel, SFCModel, StylePropsModel } from '@lib/frontend/core/core.models';
import type { UseStylesParamsModel } from '@lib/frontend/style/hooks/useStyles/useStyles.models';
import type { UseThemeModel } from '@lib/frontend/style/hooks/useTheme/useTheme.models';
import type { TestIdPropsModel } from '@lib/frontend/test/test.models';
import type { Component, ComponentType, ForwardedRef, RefObject } from 'react';

export interface ComposeComponentParamsModel<TProps, TResult, TRef = unknown>
  extends Pick<UseStylesParamsModel<TProps>, 'stylers'> {
  getComponent(props: TProps): ComponentType<TResult> | Component<TResult> | string;
  getProps?(
    props: TProps & StylePropsModel & TestIdPropsModel,
    theme: UseThemeModel,
    ref?: ForwardedRef<RefObject<TRef>>,
  ): TResult;
  isWeb?: boolean;
}

export type ComposeComponentPropsModel<TProps> = PropsModel<
  SFCModel<
    TProps & {
      nativeID?: string;
    }
  >
>;
