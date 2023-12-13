import { SkeletonGroup } from '#lib-frontend/animation/components/SkeletonGroup/SkeletonGroup';
import { type ItemListPropsModel } from '#lib-frontend/core/components/ItemList/ItemList.models';
import { PressableItem } from '#lib-frontend/core/components/PressableItem/PressableItem';
import { Tile } from '#lib-frontend/core/components/Tile/Tile';
import { DIRECTION } from '#lib-frontend/core/core.constants';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { SearchField } from '#lib-frontend/search/components/SearchField/SearchField';
import { useSearch } from '#lib-frontend/search/hooks/useSearch/useSearch';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const ItemList: LFCModel<ItemListPropsModel> = ({
  emptyString = ({ t }) => t('core:nothingToShow'),
  isSearchable,
  items,
  title,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation();
  const { query, result, search } = useSearch({
    keys: ['title', 'id'],
    list: items?.map((item) => ({ ...item, title: item.title ? t(item.title) : item.id })) ?? [],
  });

  return (
    <MainLayout
      {...wrapperProps}
      isVerticalScrollable>
      <SkeletonGroup>
        <Tile
          rightElement={
            isSearchable
              ? () => (
                  <SearchField
                    flex
                    onChange={search}
                    value={query}
                  />
                )
              : undefined
          }
          title={title}>
          {result?.map(({ id, ...item }) => (
            <PressableItem
              {...item}
              border={DIRECTION.TOP}
              key={id}
            />
          )) ?? (
            <PressableItem
              icon="empty"
              title={emptyString}
            />
          )}
        </Tile>
      </SkeletonGroup>
    </MainLayout>
  );
};
