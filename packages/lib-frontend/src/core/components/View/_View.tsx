import type { _ViewPropsModel } from '@lib/frontend/core/components/View/_View.models';
import type { FCModel } from '@lib/frontend/core/core.models';
import { createElement } from 'react';
import type { ScrollViewProps, TouchableOpacityProps, ViewProps } from 'react-native';
import { ScrollView, TouchableOpacity, View } from 'react-native';

export const _View: FCModel<_ViewPropsModel> = ({
  Component,
  children,
  isHorizontalScrollable,
  isVerticalScrollable,
  onMeasure,
  onPress,
  onPressIn,
  onPressOut,
  onScroll,
  style,
  testID,
  ...props
}) => {
  let _Component;
  let _props: ViewProps = {
    ...props,
    onLayout: onMeasure
      ? (e) => {
          const { height, width, x, y } = e.nativeEvent.layout;
          onMeasure({ height, width, x, y });
        }
      : undefined,
    testID,
  };

  if (Component) {
    _Component = Component;
  } else if (onPress || onPressIn || onPressOut) {
    _Component = TouchableOpacity;
    _props = {
      ..._props,
      activeOpacity: 1,
      onPress,
      onPressIn,
      onPressOut,
      style,
    } as TouchableOpacityProps;
  } else if (isHorizontalScrollable || isVerticalScrollable) {
    _Component = ScrollView;
    _props = {
      ..._props,
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
    } as ScrollViewProps;
  } else {
    _Component = View;
    _props = { ..._props, style } as ViewProps;
  }

  return createElement(_Component, _props, children);
};
