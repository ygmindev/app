import reduce from 'lodash/reduce';
import { type ReactElement, type ReactNode } from 'react';
import { Children, cloneElement, createElement, forwardRef, isValidElement, useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { AnimatableView } from '@lib/frontend/animation/components/AnimatableView/AnimatableView';
import { View } from '@lib/frontend/core/components/View/View';
import {
  type WrapperPropsModel,
  type WrapperRefModel,
} from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import { type ChildrenPropsModel, type RLFCModel } from '@lib/frontend/core/core.models';
import { isFragment } from '@lib/frontend/core/utils/isFragment/isFragment';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { spacingStyler } from '@lib/frontend/style/utils/styler/spacingStyler/spacingStyler';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';

export const Wrapper: RLFCModel<WrapperRefModel, WrapperPropsModel> = forwardRef(
  ({ animation, children, isDistribute, ...props }, ref) => {
    const theme = useTheme();
    const { styles, wrapperProps } = useLayoutStyles({ props });

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

      const { length } = childrenF;
      return reduce(
        childrenF as Array<ReactElement>,
        (result, child) => {
          const childProps = child.props as WrapperPropsModel;
          return [
            ...result,
            cloneElement(child, {
              style: StyleSheet.flatten(
                filterNil([
                  isDistribute && { flexGrow: 1, flexShrink: 1 },
                  ((wrapperProps.isReverse && result.length !== length - 1) ||
                    (!wrapperProps.isReverse && result.length > 0)) &&
                    spacingStyler(
                      {
                        mLeft:
                          childProps.mLeft === undefined
                            ? wrapperProps.isRow &&
                              (wrapperProps.s ??
                                (wrapperProps.isRowAlign ? THEME_SIZE.SMALL : undefined))
                            : childProps.mLeft,
                        mTop:
                          childProps.mTop === undefined
                            ? !wrapperProps.isRow && wrapperProps.s
                            : childProps.mTop,
                      },
                      theme,
                    ),
                  childProps.style,
                ]),
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
  },
);

process.env.APP_IS_DEBUG && (Wrapper.displayName = variableName({ Wrapper }));
