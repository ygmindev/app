import { AnimatableView } from '@lib/frontend/animation/components/AnimatableView/AnimatableView';
import { View } from '@lib/frontend/core/components/View/View';
import {
  type WrapperPropsModel,
  type WrapperRefModel,
} from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import { type ChildrenPropsModel, type RLFCModel } from '@lib/frontend/core/core.models';
import { isFragment } from '@lib/frontend/core/utils/isFragment/isFragment';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';
import reduce from 'lodash/reduce';
import { type ReactElement, type ReactNode } from 'react';
import { Children, cloneElement, createElement, isValidElement, useMemo } from 'react';
import { StyleSheet } from 'react-native';

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

  return animation
    ? createElement(AnimatableView, { ...props, animation, ref, style: styles }, childrenF)
    : createElement(View, { ...props, ref, style: styles }, childrenF);
};

process.env.APP_IS_DEBUG && (Wrapper.displayName = variableName({ Wrapper }));
