import { type ItemListPropsModel } from '@lib/frontend/core/components/ItemList/ItemList.models';
import { PressableItem } from '@lib/frontend/core/components/PressableItem/PressableItem';
import { Tile } from '@lib/frontend/core/components/Tile/Tile';
import { DIRECTION, ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCPropsModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { SearchInput } from '@lib/frontend/search/components/SearchInput/SearchInput';
import { useSearch } from '@lib/frontend/search/hooks/useSearch/useSearch';
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
  const { t } = useTranslation();
  const { query, result, search } = useSearch({
    items: items?.map((item) => ({ ...item, title: item.title ? t(item.title) : item.id })) ?? [],
    keys: ['title', 'id'],
  });
  return (
    <MainLayout {...wrapperProps}>
      <Tile
        rightElement={
          isSearchable && items?.length
            ? () => (
                <SearchInput
                  flex
                  onChange={search}
                  value={query}
                />
              )
            : undefined
        }
        title={title}>
        {result?.length > 0 ? (
          result.map((item, i) => (
            <PressableItem
              {...item}
              border={i > 0 ? DIRECTION.TOP : undefined}
              elementState={elementState}
              key={item.id}
              rightElement={
                rightElement ? (isActive) => rightElement({ isActive, item }) : undefined
              }
            />
          ))
        ) : (
          <PressableItem
            elementState={ELEMENT_STATE.DISABLED}
            icon="empty"
            pVertical
            title={emptyString}
          />
        )}
      </Tile>
    </MainLayout>
  );
};
