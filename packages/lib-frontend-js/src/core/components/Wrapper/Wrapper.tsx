import { animatable } from '@lib/frontend/animation/utils/animatable/animatable';
import { PressableView } from '@lib/frontend/core/components/PressableView/PressableView';
import { ScrollView } from '@lib/frontend/core/components/ScrollView/ScrollView';
import { View } from '@lib/frontend/core/components/View/View';
import {
  type WrapperPropsModel,
  type WrapperRefModel,
} from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import { type ChildrenPropsModel, type RLFCModel } from '@lib/frontend/core/core.models';
import { isFragment } from '@lib/frontend/core/utils/isFragment/isFragment';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import reduce from 'lodash/reduce';
import { type ReactElement, type ReactNode } from 'react';
import { Children, cloneElement, isValidElement, useMemo } from 'react';
import { StyleSheet } from 'react-native';

const AnimatablePressableView = animatable({ Component: PressableView });
const AnimatableScrollView = animatable({ Component: ScrollView });
const AnimatableView = animatable({ Component: View });

export const Wrapper: RLFCModel<WrapperRefModel, WrapperPropsModel> = ({
  animation,
  children,
  isDistribute,
  ref,
  ...props
}) => {
  const { styles } = useLayoutStyles({ props });

  const getChildren = (children: ReactNode | Array<ReactNode>): Array<ReactNode> => {
    const childrenF = reduce(
      Children.toArray(children),
      (result, child) =>
        isValidElement(child)
          ? [
              ...result,
              ...(isFragment(child)
                ? getChildren((child.props as ChildrenPropsModel).children)
                : [child]),
            ]
          : result,
      [] as Array<ReactNode>,
    );

    return reduce(
      childrenF as Array<ReactElement<WrapperPropsModel>>,
      (result, child) => {
        return [
          ...result,
          cloneElement(child, {
            style: StyleSheet.flatten(
              filterNil([isDistribute && { flexGrow: 1, flexShrink: 1 }, child.props.style]),
            ),
          }),
        ];
      },
      [] as Array<ReactNode>,
    );
  };

  const childrenF = useMemo(() => getChildren(children), [children]);

  const Component = useMemo(() => {
    const isScrollable =
      props.isHorizontalScrollable || props.isVerticalScrollable || props.onScroll;
    const isPressable = props.onPress || props.onPressIn || props.onPressOut;
    return animation
      ? isScrollable
        ? AnimatableScrollView
        : isPressable
          ? AnimatablePressableView
          : AnimatableView
      : isScrollable
        ? ScrollView
        : isPressable
          ? PressableView
          : View;
  }, [
    animation,
    props.isHorizontalScrollable,
    props.isVerticalScrollable,
    props.onPress,
    props.onScroll,
  ]);

  return (
    <Component
      {...props}
      animation={animation}
      ref={ref}
      style={styles}>
      {childrenF}
    </Component>
  );
};
