import { Tile } from '#lib-frontend/core/components/Tile/Tile';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { FundingDetail } from '#lib-frontend/funding/components/FundingDetail/FundingDetail';
import { type FundingTilePropsModel } from '#lib-frontend/funding/components/FundingTile/FundingTile.models';
import { FUNDING } from '#lib-frontend/funding/funding.constants';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const FundingTile: LFCModel<FundingTilePropsModel> = ({ funding, onPress, ...props }) => {
  const { t } = useTranslation([FUNDING]);
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Tile
      {...wrapperProps}
      image={funding?.Group?.logo}
      onPress={onPress}
      title={t('funding:funding')}>
      <FundingDetail funding={funding} />
    </Tile>
  );
};
