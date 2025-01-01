import {
  type ComposeComponentModel,
  type ComposeComponentParamsModel,
} from '@lib/frontend/core/utils/composeComponent/composeComponent.models';
import { isFragment } from '@lib/frontend/core/utils/isFragment/isFragment';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import {
  type StyleModel,
  type StylePropsModel,
  type ViewStyleModel,
} from '@lib/frontend/style/style.models';
import { type TestIdPropsModel } from '@lib/frontend/test/test.models';
import { type ReactElement } from 'react';
import { createElement, forwardRef } from 'react';
import { unstable_createElement } from 'react-native-web';

export const composeComponent = <
  TProps,
  TResult,
  TStyle extends StyleModel = ViewStyleModel,
  TRef = unknown,
>({
  Component,
  getProps,
  isWeb,
  stylers,
}: ComposeComponentParamsModel<TProps, TResult, TStyle, TRef>): ComposeComponentModel<
  TProps,
  TStyle,
  TRef
> =>
  forwardRef((props, ref): ReactElement<TResult> | null => {
    const theme = useTheme();
    // TODO: typing from forwardRef props -> PropsWithoutRef
    const { styles } = useStyles({ props: props as TProps & StylePropsModel<TStyle>, stylers });
    const propsF = getProps
      ? getProps(
          { ...(props as TProps & TestIdPropsModel & StylePropsModel<TStyle>), style: styles },
          theme,
          ref,
        )
      : props;
    return (
      propsF &&
      (isWeb ? (unstable_createElement as typeof createElement) : createElement)(Component, {
        ...propsF,
        ...(isFragment(Component)
          ? {}
          : { nativeid: props.nativeID, ref, style: styles, testID: props.testID }),
      } as TResult & StylePropsModel<TStyle>)
    );
  }) as ComposeComponentModel<TProps, TStyle, TRef>;
