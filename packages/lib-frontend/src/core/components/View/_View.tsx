import { SCROLL_VIEW_CONTAINER_KEYS } from '@lib/frontend/core/components/View/_View.constants';
import type { _ViewPropsModel } from '@lib/frontend/core/components/View/_View.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { ComposeComponentParamsModel } from '@lib/frontend/core/utils/composeComponent/composeComponent.models';
import type { ViewStyleModel } from '@lib/frontend/style/style.models';
import { isEmpty } from '@lib/shared/core/utils/isEmpty/isEmpty';
import pick from 'lodash/pick';
import type { ScrollViewProps, TouchableOpacityProps, ViewProps } from 'react-native';
import { ScrollView, TouchableOpacity, View } from 'react-native';

export const _viewParams: ComposeComponentParamsModel<_ViewPropsModel, ViewProps> = {
  getComponent: ({
    isHorizontalScrollable,
    isVerticalScrollable,
    onPress,
    onPressIn,
    onPressOut,
    onScroll,
  }) =>
    onPress || onPressIn || onPressOut
      ? TouchableOpacity
      : isHorizontalScrollable || isVerticalScrollable || onScroll
      ? ({ style, ...props }) => {
          const _containerStyle = pick(style as ViewStyleModel, SCROLL_VIEW_CONTAINER_KEYS);
          return isEmpty(_containerStyle) ? (
            <ScrollView {...props} />
          ) : (
            <View style={_containerStyle}>
              <ScrollView {...props} />
            </View>
          );
        }
      : View,

  getProps: ({
    children,
    isHorizontalScrollable,
    isVerticalScrollable,
    onMeasure,
    onMouseEnter,
    onMouseLeave,
    onPress,
    onPressIn,
    onPressOut,
    onResponderGrant,
    onResponderRelease,
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

    onMouseEnter: () => onMouseEnter && onMouseEnter(),

    onMouseLeave: () => onMouseLeave && onMouseLeave(),

    onResponderGrant: () => onResponderGrant && onResponderGrant(),

    onResponderRelease: () => onResponderRelease && onResponderRelease(),

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
};

export const _View = composeComponent<_ViewPropsModel, ViewProps>(_viewParams);
