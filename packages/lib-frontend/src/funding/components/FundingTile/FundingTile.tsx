import { Chip } from '#lib-frontend/core/components/Chip/Chip';
import { Tile } from '#lib-frontend/core/components/Tile/Tile';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { FundingDetail } from '#lib-frontend/funding/components/FundingDetail/FundingDetail';
import { type FundingTilePropsModel } from '#lib-frontend/funding/components/FundingTile/FundingTile.models';
import { FUNDING } from '#lib-frontend/funding/funding.constants';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_COLOR } from '#lib-frontend/style/style.constants';

export const FundingTile: LFCModel<FundingTilePropsModel> = ({ funding, onPress, ...props }) => {
  const { t } = useTranslation([FUNDING]);
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Tile
      {...wrapperProps}
      image={funding?.Group?.logo}
      label={t('funding:funding')}
      onPress={onPress}
      rightElement={
        funding?.quoteCount
          ? () => (
              <Chip color={THEME_COLOR.SECONDARY}>
                {t('funding:quoteCount', { value: funding.quoteCount })}
              </Chip>
            )
          : undefined
      }>
      <FundingDetail funding={funding} />
    </Tile>
  );
};
