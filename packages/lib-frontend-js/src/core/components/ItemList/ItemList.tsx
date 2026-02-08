import { type ItemListPropsModel } from '@lib/frontend/core/components/ItemList/ItemList.models';
import { PressableTitle } from '@lib/frontend/core/components/PressableTitle/PressableTitle';
import { Tile } from '@lib/frontend/core/components/Tile/Tile';
import { VirtualizedList } from '@lib/frontend/core/components/VirtualizedList/VirtualizedList';
import { DIRECTION, ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCPropsModel } from '@lib/frontend/core/core.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type ReactElement } from 'react';

export const ItemList = <TType extends WithIdModel>({
  elementState,
  emptyString = ({ t }) => t('core:nothingToShow'),
  isSearchable,
  items,
  rightElement,
  title,
  topElement,
  ...props
}: LFCPropsModel<ItemListPropsModel<TType>>): ReactElement<
  LFCPropsModel<ItemListPropsModel<TType>>
> => {
  const { wrapperProps } = useLayoutStyles({ props });
  const theme = useTheme();
  return (
    <Tile
      p={0}
      pHorizontal
      title={title}
      {...wrapperProps}>
      {topElement}

      <VirtualizedList
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
        render={(item, i) => (
          <PressableTitle
            {...item}
            border={i > 0 ? DIRECTION.TOP : undefined}
            elementState={elementState}
            height={theme.shape.height[THEME_SIZE.MEDIUM]}
            key={item.id}
            rightElement={rightElement ? (isActive) => rightElement({ isActive, item }) : undefined}
            testID={item.id}
          />
        )}
      />
    </Tile>
  );
};
