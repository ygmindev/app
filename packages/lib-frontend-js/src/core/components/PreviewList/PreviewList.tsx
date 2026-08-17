import { Badgeable } from '@lib/frontend/core/components/Badgeable/Badgeable';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Image } from '@lib/frontend/core/components/Image/Image';
import { type PreviewListPropsModel } from '@lib/frontend/core/components/PreviewList/PreviewList.models';
import { VirtualizedList } from '@lib/frontend/core/components/VirtualizedList/VirtualizedList';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCPropsModel } from '@lib/frontend/core/core.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE, THEME_SIZE_MORE } from '@lib/frontend/style/style.constants';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type ReactElement } from 'react';

export const PreviewList = <TType extends WithIdModel>({
  elementState,
  items,
  onDelete,
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
      items={items ?? []}
      render={(item) => (
        <Badgeable
          badgeElement={
            onDelete ? (
              <Button
                icon="times"
                onPress={async () => onDelete(item)}
                p={0}
                size={THEME_SIZE_MORE.XSMALL}
              />
            ) : undefined
          }
          isHoverable
          key={item.id}>
          <Wrapper
            border
            height={theme.shape.height[THEME_SIZE.LARGE]}
            isOverflowHidden
            round={theme.shape.borderRadius[THEME_SIZE.SMALL]}
            width={theme.shape.height[THEME_SIZE.LARGE]}>
            {item.image && (
              <Image
                height={theme.shape.height[THEME_SIZE.LARGE]}
                src={item.image}
                width={theme.shape.height[THEME_SIZE.LARGE]}
              />
            )}
          </Wrapper>
        </Badgeable>
      )}
      s
    />
  );
};
