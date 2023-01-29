import type {
  ComposeComponentModel,
  ComposeComponentParamsModel,
} from '@lib/frontend/core/utils/composeComponent/composeComponent.models';
import { isFragment } from '@lib/frontend/core/utils/isFragment/isFragment';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import type { StyleModel, ViewStyleModel } from '@lib/frontend/style/style.models';
import type { ReactElement } from 'react';
import { createElement, forwardRef, useMemo } from 'react';
import { unstable_createElement } from 'react-native-web';

export const composeComponent = <
  TProps,
  TResult,
  TStyle extends StyleModel = ViewStyleModel,
  TRef = unknown,
>({
  getComponent,
  getProps,
  isWeb,
  stylers,
}: ComposeComponentParamsModel<TProps, TResult, TStyle, TRef>): ComposeComponentModel<
  TProps,
  TStyle,
  TRef
> =>
  forwardRef((props, ref): ReactElement<TResult> => {
    const { styles } = useStyles({ props, stylers });
    const theme = useTheme();
    const _propsWithStyle = { ...props, style: styles };
    const _Component = useMemo(
      () => getComponent(_propsWithStyle),
      [getComponent, _propsWithStyle],
    );
    const _props = useMemo(
      () => (getProps ? getProps(_propsWithStyle, theme, ref) : _propsWithStyle),
      [getProps, _propsWithStyle, styles, theme, ref],
    );
    return (isWeb ? unstable_createElement : createElement)(_Component, {
      ..._props,
      ...(isFragment(_Component)
        ? {}
        : { nativeid: props.nativeID, ref, style: styles, testID: props.testID }),
    });
  }) as ComposeComponentModel<TProps, TStyle, TRef>;
