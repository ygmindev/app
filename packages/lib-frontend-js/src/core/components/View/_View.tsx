import {
  type _ViewPropsModel,
  type _ViewRefModel,
} from '@lib/frontend/core/components/View/_View.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type ComposeComponentParamsModel } from '@lib/frontend/core/utils/composeComponent/composeComponent.models';
import { type ViewStyleModel } from '@lib/frontend/style/style.models';
import { type ViewProps } from 'react-native';
import { View } from 'react-native';

export const getViewParams = (): ComposeComponentParamsModel<
  _ViewPropsModel,
  ViewProps,
  ViewStyleModel,
  _ViewRefModel
> => ({
  Component: View,

  getProps: ({
    children,
    isFocusable = false,
    isHidden,
    onMeasure,
    onMouseEnter,
    onMouseLeave,
    onPressIn,
    onPressOut,
    onResponderGrant,
    onResponderRelease,
    pointerEvents,
    tabIndex,
  }) => ({
    children,

    focusable: isFocusable,

    onLayout: onMeasure
      ? (e) => {
          const { height, width, x, y } = e.nativeEvent.layout;
          onMeasure({ height, width, x, y });
        }
      : undefined,

    onMouseEnter: () => onMouseEnter?.(),

    onMouseLeave: () => onMouseLeave?.(),

    onPressIn: () => onPressIn?.(),

    onPressOut: () => onPressOut?.(),

    onResponderGrant: () => onResponderGrant?.(),

    onResponderRelease: () => onResponderRelease?.(),

    pointerEvents: isHidden ? 'none' : pointerEvents,

    tabIndex,
  }),
});

export const _View = composeComponent<_ViewPropsModel, ViewProps, ViewStyleModel, _ViewRefModel>(
  getViewParams(),
);
