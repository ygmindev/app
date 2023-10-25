import { Chip } from '#lib-frontend/core/components/Chip/Chip';
import { Text } from '#lib-frontend/core/components/Text/Text';
import { Tile } from '#lib-frontend/core/components/Tile/Tile';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { withDivider } from '#lib-frontend/core/utils/withDivider/withDivider';
import { ItemTable } from '#lib-frontend/data/components/ItemTable/ItemTable';
import { useFormatter } from '#lib-frontend/data/hooks/useFormatter/useFormatter';
import { type FundingTilePropsModel } from '#lib-frontend/funding/components/FundingTile/FundingTile.models';
import { FUNDING } from '#lib-frontend/funding/funding.constants';
import { useCurrentGroup } from '#lib-frontend/group/hooks/useCurrentGroup/useCurrentGroup';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_COLOR } from '#lib-frontend/style/style.constants';
import { CREDIT_RATING_WATCH } from '#lib-shared/funding/resources/CreditRating/CreditRating.constants';

export const FundingTile: LFCModel<FundingTilePropsModel> = ({ funding, ...props }) => {
  const { t } = useTranslation([FUNDING]);
  const { wrapperProps } = useLayoutStyles({ props });
  const { formatRange } = useFormatter();
  const currentGroup = useCurrentGroup();
  return (
    <Tile
      {...wrapperProps}
      image={funding?.Group?.logo}
      onPress={() => null}
      title={t('funding:funding')}>
      <ItemTable
        items={[
          funding.Group?.name && {
            description: funding.Group?.name,
            icon: 'building',
            id: 'issuer',
            title: t('funding:issuer'),
          },
          {
            description: `${funding.currency} ${formatRange(funding.amount, {
              isScale: false,
            })}`,
            icon: 'water',
            id: 'amount',
            title: t('funding:amount'),
          },
          {
            description: `${formatRange(funding.maturity, { isScale: false })}`,
            icon: 'hourglass',
            id: 'maturity',
            title: t('funding:maturity'),
          },
          {
            description: (
              <Wrapper
                isRow
                s>
                {funding.CreditRating &&
                  withDivider(
                    funding.CreditRating.map(({ _id, longTermRating, longTermWatch }) => ({
                      element: (
                        <Wrapper isRowAlign>
                          <Text>{longTermRating}</Text>

                          {longTermWatch && (
                            <Chip
                              color={
                                longTermWatch === CREDIT_RATING_WATCH.POSITIVE
                                  ? THEME_COLOR.SUCCESS
                                  : THEME_COLOR.WARNING
                              }
                              icon="eye">
                              {longTermWatch}
                            </Chip>
                          )}
                        </Wrapper>
                      ),
                      id: _id ?? '',
                    })),
                    { isVertical: true },
                  )}
              </Wrapper>
            ),
            icon: 'speedometer',
            id: 'creditRatings',
            title: t('funding:creditRating'),
          },
        ]}
      />
    </Tile>
  );
};
