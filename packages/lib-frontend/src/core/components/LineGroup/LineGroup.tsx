import { type LineGroupPropsModel } from '#lib-frontend/core/components/LineGroup/LineGroup.models';
import { LineItem } from '#lib-frontend/core/components/LineItem/LineItem';
import { Tile } from '#lib-frontend/core/components/Tile/Tile';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { TranslatableText } from '#lib-frontend/locale/components/TranslatableText/TranslatableText';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const LineGroup: LFCModel<LineGroupPropsModel> = ({
  children,
  emptyString = ({ t }) => t('core:nothingToShow'),
  title,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Tile
      {...wrapperProps}
      isVerticalScrollable
      title={title}>
      {children ?? (
        <LineItem icon="empty">
          <TranslatableText>{emptyString}</TranslatableText>
        </LineItem>
      )}
    </Tile>
  );
};
