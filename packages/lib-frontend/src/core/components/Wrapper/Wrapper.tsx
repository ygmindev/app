import type { WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useIsMobile } from '@lib/frontend/core/hooks/useIsMobile/useIsMobile';
import { isFragment } from '@lib/frontend/core/utils/isFragment/isFragment';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/styling/hooks/useTheme/useTheme';
import { spacingStyler } from '@lib/frontend/styling/utils/styler/spacingStyler/spacingStyler';
import { viewStyler } from '@lib/frontend/styling/utils/styler/viewStyler/viewStyler';
import { THEME_SIZE } from '@lib/frontend/styling/utils/theme/theme.constants';
import type { PartialModel } from '@lib/shared/core/core.models';
import { debounce } from '@lib/shared/core/utils/debounce/debounce';
import { uid } from '@lib/shared/core/utils/uid/uid';
import { isNil, reduce, size } from 'lodash';
import type { ElementType, ReactElement, ReactNode } from 'react';
import { Children, cloneElement, createElement, isValidElement } from 'react';
import type {
  LayoutChangeEvent,
  ScrollViewProps,
  TouchableOpacityProps,
  ViewProps,
} from 'react-native';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import type { AnimatableComponent } from 'react-native-animatable';
import { createAnimatableComponent, View as ViewWithAnimationProps } from 'react-native-animatable';

const TouchableOpacityWithAnimationProps = createAnimatableComponent(TouchableOpacity);

export const Wrapper: SFCModel<WrapperPropsModel> = ({
  animation,
  children,
  forwardedRef,
  isDistribute,
  isHorizontalScrollable,
  isVerticalScrollable,
  onMeasure,
  onPress,
  onPressIn,
  onPressOut,
  onScroll,
  spacing,
  testID,
  ...props
}) => {
  const theme = useTheme();
  const isMobile = useIsMobile();
  const isPressable = onPress || onPressIn || onPressOut;
  const isScrollable = isVerticalScrollable || isHorizontalScrollable;

  const { styles } = useStyles({
    props: {
      ...props,
      align: props.isCenter || props.isRowAlign ? 'center' : props.align,
      isFullWidth: isHorizontalScrollable || props.isFullWidth,
      isRow: props.isRow || props.isRowAlign,
      justify: props.isCenter ? 'center' : props.justify,
    },
    stylers: [viewStyler],
  });

  const _getChildren = (children: ReactNode | Array<ReactNode>): Array<ReactNode> => {
    const _children = reduce<ReactNode, Array<ReactNode>>(
      Children.toArray(children) as Array<ReactNode>,
      (result, child) =>
        isValidElement(child)
          ? [...result, ...(isFragment(child) ? _getChildren(child.props.children) : [child])]
          : result,
      [],
    );
    const _isRow = props.isRow || props.isRowAlign;
    const _childrenLength = size(_children);
    return reduce<ReactElement, Array<ReactNode>>(
      _children as Array<ReactElement>,
      (result, child) => [
        ...result,
        cloneElement(child, {
          key: child.key || uid(),
          style: StyleSheet.flatten(
            [
              isDistribute && { flexBasis: 0, flexGrow: 1 },
              (props.isReverse && result.length !== _childrenLength - 1) ||
                (!props.isReverse &&
                  result.length &&
                  spacingStyler(
                    {
                      mLeft: isNil(child.props.mLeft)
                        ? _isRow && (props.isRowAlign ? THEME_SIZE.SMALL : spacing)
                        : child.props.mLeft,
                      mTop: isNil(child.props.mTop) ? !_isRow && spacing : child.props.mTop,
                    },
                    { isMobile, theme },
                  )),
              child.props.style,
            ].filter(Boolean),
          ),
        }),
      ],
      [],
    );
  };

  const Component = isScrollable
    ? ScrollView
    : isPressable
    ? animation
      ? TouchableOpacityWithAnimationProps
      : TouchableOpacity
    : animation
    ? ViewWithAnimationProps
    : View;

  const _onMeasure = onMeasure
    ? debounce({
        callback: (e: LayoutChangeEvent) => {
          const { height, width, x, y } = e.nativeEvent.layout;
          onMeasure({ height, width, x, y });
        },
      })
    : undefined;

  const componentProps: ViewProps = {
    onLayout: _onMeasure,
    ...((isPressable
      ? {
          activeOpacity: 1,
          onPress,
          onPressIn,
          onPressOut,
        }
      : {}) as TouchableOpacityProps),
    ...((isScrollable
      ? {
          alwaysBounceHorizontal: false,
          alwaysBounceVertical: false,
          contentContainerStyle: styles,
          horizontal: isHorizontalScrollable,
          onScroll: onScroll
            ? ({ nativeEvent }) =>
                onScroll({ x: nativeEvent.contentOffset.x, y: nativeEvent.contentOffset.y })
            : undefined,
          scrollEnabled: true,
          scrollEventThrottle: 16,
          showsHorizontalScrollIndicator: isHorizontalScrollable,
          showsVerticalScrollIndicator: isVerticalScrollable,
        }
      : {}) as ScrollViewProps),
    ...((animation
      ? {
          animation: animation.animation,
          delay: animation.delay,
          duration: animation.duration || theme.animation.duration,
          easing: 'ease-in-out',
          iterationCount: animation.isInfinite ? 'infinite' : undefined,
          onAnimationBegin: animation.animation ? animation.onStart : undefined,
          onAnimationEnd: animation.animation ? animation.onEnd : undefined,
          onTransitionBegin: animation.transition ? animation.onStart : undefined,
          onTransitionEnd: animation.transition ? animation.onEnd : undefined,
          transition: animation.transition,
        }
      : {}) as PartialModel<AnimatableComponent<object, object>>),
  };

  return createElement(
    Component as ElementType,
    { testID, ...props, ...componentProps, ref: forwardedRef, style: styles },
    _getChildren(children),
  );
};
