import { _VirtualizedList } from '@lib/frontend/core/components/VirtualizedList/_VirtualizedList';
import type {
  VirtualizedListPropsModel,
  VirtualizedListRefModel,
} from '@lib/frontend/core/components/VirtualizedList/VirtualizedList.models';
import type { RSFCPropsModel, SFCPropsModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { getSpacing } from '@lib/frontend/style/utils/styler/spacingStyler/spacingStyler';
import type { WithIdModel } from '@lib/shared/core/decorators/withId/withId.models';
import type { ForwardedRef, ReactElement } from 'react';
import { forwardRef } from 'react';
import { View } from 'react-native';

export const VirtualizedList = forwardRef(
  <TType extends WithIdModel>(
    { spacing = THEME_SIZE.SMALL, ...props }: SFCPropsModel<VirtualizedListPropsModel<TType>>,
    ref: ForwardedRef<VirtualizedListRefModel>,
  ): ReactElement<RSFCPropsModel<VirtualizedListPropsModel<TType>>> => {
    const { styles } = useStyles({ props });
    const theme = useTheme();
    return (
      <_VirtualizedList
        {...props}
        divider={spacing ? <View style={{ height: getSpacing(spacing, theme) }} /> : undefined}
        ref={ref}
        style={styles}
      />
    );
  },
);
