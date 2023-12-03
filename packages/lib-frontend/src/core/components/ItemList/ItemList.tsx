import { SkeletonGroup } from '#lib-frontend/animation/components/SkeletonGroup/SkeletonGroup';
import { type ItemListPropsModel } from '#lib-frontend/core/components/ItemList/ItemList.models';
import { PressableItem } from '#lib-frontend/core/components/PressableItem/PressableItem';
import { Tile } from '#lib-frontend/core/components/Tile/Tile';
import { DIRECTION } from '#lib-frontend/core/core.constants';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { SearchField } from '#lib-frontend/search/components/SearchField/SearchField';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const ItemList: LFCModel<ItemListPropsModel> = ({
  emptyString = ({ t }) => t('core:nothingToShow'),
  isSearchable = true,
  items,
  title,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation();
  const itemsF = items?.map((item) => ({ ...item, title: item.title ? t(item.title) : item.id }));
  return (
    <SkeletonGroup>
      <MainLayout
        {...wrapperProps}
        isVerticalScrollable>
        <Tile
          rightElement={isSearchable ? () => <SearchField flex /> : undefined}
          title={title}>
          {itemsF ? (
            itemsF.map(({ id, ...item }) => (
              <PressableItem
                {...item}
                border={DIRECTION.TOP}
                key={id}
              />
            ))
          ) : (
            <PressableItem
              icon="empty"
              title={emptyString}
            />
          )}
        </Tile>
      </MainLayout>
    </SkeletonGroup>
  );
};
