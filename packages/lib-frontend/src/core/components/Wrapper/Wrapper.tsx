import { View } from '@lib/frontend/core/components/View/View';
import type { WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useIsMobile } from '@lib/frontend/core/hooks/useIsMobile/useIsMobile';
import { isFragment } from '@lib/frontend/core/utils/isFragment/isFragment';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { FLEX_ALIGN } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { spacingStyler } from '@lib/frontend/style/utils/styler/spacingStyler/spacingStyler';
import { viewStyler } from '@lib/frontend/style/utils/styler/viewStyler/viewStyler';
import { THEME_SIZE } from '@lib/frontend/style/utils/theme/theme.constants';
import { uid } from '@lib/shared/core/utils/uid/uid';
import { reduce } from 'lodash';
import type { ReactElement, ReactNode } from 'react';
import { Children, cloneElement, createElement, isValidElement } from 'react';
import { StyleSheet } from 'react-native';

export const Wrapper: SFCModel<WrapperPropsModel> = ({
  children,
  isDistribute,
  isRowAlign,
  spacing,
  ...props
}) => {
  const theme = useTheme();
  const isMobile = useIsMobile();

  const { styles } = useStyles({
    props: {
      ...props,
      align: props.isCenter || isRowAlign ? FLEX_ALIGN.CENTER : props.align,
      isRow: props.isRow || isRowAlign,
      justify: props.isCenter ? FLEX_ALIGN.CENTER : props.justify,
    },
    stylers: [viewStyler],
  });

  const _getChildren = (children: ReactNode | Array<ReactNode>): Array<ReactNode> => {
    const _children = reduce(
      Children.toArray(children),
      (result, child) =>
        isValidElement(child)
          ? [...result, ...(isFragment(child) ? _getChildren(child.props.children) : [child])]
          : result,
      [] as Array<ReactNode>,
    );

    const _isRow = props.isRow || isRowAlign;
    const _length = _children.length;
    return reduce(
      _children as Array<ReactElement>,
      (result, child) => [
        ...result,
        cloneElement(child, {
          key: child.key || uid(),
          style: StyleSheet.flatten(
            [
              isDistribute && { flexBasis: 0, flexGrow: 1 },
              (props.isReverse && result.length !== _length - 1) ||
                (!props.isReverse &&
                  result.length &&
                  spacingStyler(
                    {
                      mLeft:
                        child.props.mLeft === undefined
                          ? _isRow && (isRowAlign ? THEME_SIZE.SMALL : spacing)
                          : child.props.mLeft,
                      mTop: child.props.mTop === undefined ? !_isRow && spacing : child.props.mTop,
                    },
                    { isMobile, theme },
                  )),
              child.props.style,
            ].filter(Boolean),
          ),
        }),
      ],
      [] as Array<ReactNode>,
    );
  };

  return createElement(View, { ...props, style: styles }, _getChildren(children));
};
