import type { _ViewPropsModel } from '@lib/frontend/core/components/View/_View.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { ScrollViewProps, TouchableOpacityProps, ViewProps } from 'react-native';
import { ScrollView, TouchableOpacity, View } from 'react-native';

export const _View = composeComponent<_ViewPropsModel, ViewProps>({
  getComponent: ({
    Component,
    isHorizontalScrollable,
    isVerticalScrollable,
    onPress,
    onPressIn,
    onPressOut,
    onScroll,
  }) =>
    Component ||
    (onPress || onPressIn || onPressOut
      ? TouchableOpacity
      : isHorizontalScrollable || isVerticalScrollable || onScroll
      ? ScrollView
      : View),

  getProps: ({
    children,
    isHorizontalScrollable,
    isVerticalScrollable,
    onMeasure,
    onPress,
    onPressIn,
    onPressOut,
    onScroll,
    style,
  }) => ({
    children,

    onLayout: onMeasure
      ? (e) => {
          const { height, width, x, y } = e.nativeEvent.layout;
          onMeasure({ height, width, x, y });
        }
      : undefined,

    ...(onPress || onPressIn || onPressOut
      ? ({ activeOpacity: 1, onPress, onPressIn, onPressOut } as TouchableOpacityProps)
      : {}),

    ...(isHorizontalScrollable || isVerticalScrollable || onScroll
      ? ({
          alwaysBounceHorizontal: false,
          alwaysBounceVertical: false,
          contentContainerStyle: style,
          horizontal: isHorizontalScrollable,
          onScroll: onScroll
            ? ({ nativeEvent }) =>
                onScroll({ x: nativeEvent.contentOffset.x, y: nativeEvent.contentOffset.y })
            : undefined,
          scrollEnabled: true,
          scrollEventThrottle: 16,
          showsHorizontalScrollIndicator: isHorizontalScrollable,
          showsVerticalScrollIndicator: isVerticalScrollable,
        } as ScrollViewProps)
      : { style }),
  }),
});
