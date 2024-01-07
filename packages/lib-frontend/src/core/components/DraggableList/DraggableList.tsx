import { type ForwardedRef, type ReactElement } from 'react';
import { forwardRef } from 'react';
import { View } from 'react-native';

import { _DraggableList } from '#lib-frontend/core/components/DraggableList/_DraggableList';
import {
  type DraggableListPropsModel,
  type DraggableListRefModel,
} from '#lib-frontend/core/components/DraggableList/DraggableList.models';
import { type RLFCPropsModel } from '#lib-frontend/core/core.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { getSpacing } from '#lib-frontend/style/utils/styler/spacingStyler/spacingStyler';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';

export const DraggableList = forwardRef(
  <TType extends WithIdModel>(
    { s, ...props }: RLFCPropsModel<DraggableListRefModel, DraggableListPropsModel<TType>>,
    ref: ForwardedRef<DraggableListRefModel>,
  ): ReactElement<RLFCPropsModel<DraggableListRefModel, DraggableListPropsModel<TType>>> => {
    const { styles } = useStyles({ props });
    const theme = useTheme();
    return (
      <_DraggableList
        {...props}
        divider={s ? <View style={{ height: getSpacing(s, theme) }} /> : undefined}
        ref={ref}
        style={styles}
      />
    );
  },
);
