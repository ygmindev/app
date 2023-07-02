import { type ForwardedRef, type ReactElement } from 'react';
import { forwardRef } from 'react';
import { View } from 'react-native';

import { _VirtualizedList } from '#lib-frontend/core/components/VirtualizedList/_VirtualizedList';
import {
  type VirtualizedListPropsModel,
  type VirtualizedListRefModel,
} from '#lib-frontend/core/components/VirtualizedList/VirtualizedList.models';
import { type RSFCPropsModel, type SFCPropsModel } from '#lib-frontend/core/core.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';
import { getSpacing } from '#lib-frontend/style/utils/styler/spacingStyler/spacingStyler';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';

export const VirtualizedList = forwardRef(
  <TType extends WithIdModel>(
    {
      isHorizontal,
      s = THEME_SIZE.SMALL,
      ...props
    }: SFCPropsModel<VirtualizedListPropsModel<TType>>,
    ref: ForwardedRef<VirtualizedListRefModel>,
  ): ReactElement<RSFCPropsModel<VirtualizedListPropsModel<TType>>> => {
    const { styles } = useStyles({ props });
    const theme = useTheme();
    return (
      <_VirtualizedList
        {...props}
        divider={
          s ? (
            <View
              style={
                isHorizontal ? { width: getSpacing(s, theme) } : { height: getSpacing(s, theme) }
              }
            />
          ) : undefined
        }
        isHorizontal={isHorizontal}
        ref={ref}
        style={styles}
      />
    );
  },
);
