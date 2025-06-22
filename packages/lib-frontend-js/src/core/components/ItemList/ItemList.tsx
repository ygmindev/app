import { type ItemListPropsModel } from '@lib/frontend/core/components/ItemList/ItemList.models';
import { PressableTitle } from '@lib/frontend/core/components/PressableTitle/PressableTitle';
import { Tile } from '@lib/frontend/core/components/Tile/Tile';
import { DIRECTION, ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCPropsModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type ReactElement } from 'react';

export const ItemList = <TType extends WithIdModel>({
  elementState,
  emptyString = ({ t }) => t('core:nothingToShow'),
  isSearchable,
  items,
  rightElement,
  title,
  ...props
}: LFCPropsModel<ItemListPropsModel<TType>>): ReactElement<
  LFCPropsModel<ItemListPropsModel<TType>>
> => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <MainLayout {...wrapperProps}>
      <Tile title={title}>
        {items && items.length > 0 ? (
          items.map((item, i) => (
            <PressableTitle
              {...item}
              border={i > 0 ? DIRECTION.TOP : undefined}
              elementState={elementState}
              key={item.id}
              p
              rightElement={
                rightElement ? (isActive) => rightElement({ isActive, item }) : undefined
              }
              testID={item.id}
            />
          ))
        ) : (
          <PressableTitle
            elementState={ELEMENT_STATE.DISABLED}
            icon="empty"
            p
            pVertical
            title={emptyString}
          />
        )}
      </Tile>
    </MainLayout>
  );
};
