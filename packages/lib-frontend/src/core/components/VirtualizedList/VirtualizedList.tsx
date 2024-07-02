import { _VirtualizedList } from '@lib/frontend/core/components/VirtualizedList/_VirtualizedList';
import {
  type VirtualizedListPropsModel,
  type VirtualizedListRefModel,
} from '@lib/frontend/core/components/VirtualizedList/VirtualizedList.models';
import { type RLFCPropsModel } from '@lib/frontend/core/core.models';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { getSpacing } from '@lib/frontend/style/utils/styler/spacingStyler/spacingStyler';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type ForwardedRef, type ReactElement } from 'react';
import { forwardRef } from 'react';
import { View } from 'react-native';

export const VirtualizedList = forwardRef(
  <TType extends WithIdModel>(
    {
      isHorizontal,
      items,
      render,
      s,
      ...props
    }: RLFCPropsModel<VirtualizedListRefModel, VirtualizedListPropsModel<TType>>,
    ref: ForwardedRef<VirtualizedListRefModel>,
  ): ReactElement<RLFCPropsModel<VirtualizedListRefModel, VirtualizedListPropsModel<TType>>> => {
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
        items={items}
        ref={ref}
        render={render}
      />
    );
  },
) as <TType extends WithIdModel>(
  props: RLFCPropsModel<VirtualizedListRefModel, VirtualizedListPropsModel<TType>>,
  ref: ForwardedRef<VirtualizedListRefModel>,
) => ReactElement<RLFCPropsModel<VirtualizedListRefModel, VirtualizedListPropsModel<TType>>>;
