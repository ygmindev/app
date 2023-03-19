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
  Component,
  getProps,
  isWeb,
  stylers,
}: ComposeComponentParamsModel<TProps, TResult, TStyle, TRef>): ComposeComponentModel<
  TProps,
  TStyle,
  TRef
> =>
  forwardRef((props, ref): ReactElement<TResult> => {
    const theme = useTheme();
    const { styles } = useStyles({ props, stylers });
    const _props = useMemo(
      () => (getProps ? getProps({ ...props, style: styles }, theme, ref) : props),
      [getProps, props, theme, ref],
    );
    return (isWeb ? unstable_createElement : createElement)(Component, {
      ..._props,
      ...(isFragment(Component) ? {} : { nativeid: props.nativeID, ref, style: styles }),
    });
  }) as ComposeComponentModel<TProps, TStyle, TRef>;
