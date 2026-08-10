import { type PreviewListPropsModel } from '@lib/frontend/core/components/PreviewList/PreviewList.models';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { VirtualizedList } from '@lib/frontend/core/components/VirtualizedList/VirtualizedList';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCPropsModel } from '@lib/frontend/core/core.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type ReactElement } from 'react';

export const PreviewList = <TType extends WithIdModel>({
  elementState,
  emptyString = ({ t }) => t('core:nothingToShow'),
  items,
  ...props
}: LFCPropsModel<PreviewListPropsModel<TType>>): ReactElement<
  LFCPropsModel<PreviewListPropsModel<TType>>
> => {
  const { wrapperProps } = useLayoutStyles({ props });
  const theme = useTheme();
  return (
    <VirtualizedList
      {...wrapperProps}
      isHorizontal
      itemSize={theme.shape.size[THEME_SIZE.LARGE]}
      items={
        (items?.length ?? 0) > 0
          ? (items ?? [])
          : [
              {
                elementState: ELEMENT_STATE.DISABLED,
                icon: 'empty',
                id: 'empty',
                title: emptyString,
              } as unknown as TType,
            ]
      }
      render={(item) => (
        <Wrapper
          border
          height={theme.shape.height[THEME_SIZE.LARGE]}
          key={item.id}
          round={theme.shape.borderRadius[THEME_SIZE.SMALL]}
          width={theme.shape.height[THEME_SIZE.LARGE]}>
          <Text>{item.id}</Text>
        </Wrapper>
      )}
      s
    />
  );
};
