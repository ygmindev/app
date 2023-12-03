import { SkeletonGroup } from '#lib-frontend/animation/components/SkeletonGroup/SkeletonGroup';
import { type ItemListPropsModel } from '#lib-frontend/core/components/ItemList/ItemList.models';
import { PressableItem } from '#lib-frontend/core/components/PressableItem/PressableItem';
import { Tile } from '#lib-frontend/core/components/Tile/Tile';
import { DIRECTION } from '#lib-frontend/core/core.constants';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { TranslatableText } from '#lib-frontend/locale/components/TranslatableText/TranslatableText';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const ItemList: LFCModel<ItemListPropsModel> = ({
  emptyString = ({ t }) => t('core:nothingToShow'),
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
        <Tile title={title}>
          {itemsF ? (
            itemsF.map(({ id, ...item }, i) => (
              <PressableItem
                {...item}
                border={i > 0 ? DIRECTION.TOP : undefined}
                key={id}
              />
            ))
          ) : (
            <PressableItem icon="empty">
              <TranslatableText>{emptyString}</TranslatableText>
            </PressableItem>
          )}
        </Tile>
      </MainLayout>
    </SkeletonGroup>
  );
};
