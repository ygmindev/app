import { _VirtualizedList } from '@lib/frontend/core/components/VirtualizedList/_VirtualizedList';
import type { VirtualizedListPropsModel } from '@lib/frontend/core/components/VirtualizedList/VirtualizedList.models';
import type { SFCPropsModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { getSpacing } from '@lib/frontend/style/utils/styler/spacingStyler/spacingStyler';
import type { WithIdModel } from '@lib/shared/core/decorators/withId/withId.models';
import type { ReactElement } from 'react';
import { View } from 'react-native';

export const VirtualizedList = <TType extends WithIdModel>({
  spacing = THEME_SIZE.SMALL,
  ...props
}: SFCPropsModel<VirtualizedListPropsModel<TType>>): ReactElement<
  SFCPropsModel<VirtualizedListPropsModel<TType>>
> => {
  const { styles } = useStyles({ props });
  const theme = useTheme();
  return (
    <_VirtualizedList<TType>
      {...props}
      divider={spacing ? <View style={{ height: getSpacing(spacing, theme) }} /> : undefined}
      style={styles}
    />
  );
};
