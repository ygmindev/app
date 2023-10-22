import { Chip } from '#lib-frontend/core/components/Chip/Chip';
import { Text } from '#lib-frontend/core/components/Text/Text';
import { Tile } from '#lib-frontend/core/components/Tile/Tile';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { withDivider } from '#lib-frontend/core/utils/withDivider/withDivider';
import { DataBoundary } from '#lib-frontend/data/components/DataBoundary/DataBoundary';
import { ItemTable } from '#lib-frontend/data/components/ItemTable/ItemTable';
import { useFormatter } from '#lib-frontend/data/hooks/useFormatter/useFormatter';
import { useFundingResource } from '#lib-frontend/funding/hooks/useFundingResource/useFundingResource';
import { type FundingInProgressPagePropsModel } from '#lib-frontend/funding/pages/FundingInProgressPage/FundingInProgressPage.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_COLOR } from '#lib-frontend/style/style.constants';
import { CREDIT_RATING_WATCH } from '#lib-shared/funding/resources/CreditRating/CreditRating.constants';

export const FundingInProgressPage: LFCModel<FundingInProgressPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation();
  const { formatRange } = useFormatter();
  const { getConnection } = useFundingResource();
  return (
    <MainLayout
      {...wrapperProps}
      p
      s>
      <DataBoundary
        id="fundings"
        query={async () => getConnection({ filter: [], pagination: { first: 10 } })}>
        {({ data }) => (
          <Wrapper s>
            {data?.result?.edges.map(({ node }) => (
              <Tile
                key={node._id}
                onPress={() => null}>
                <ItemTable
                  items={[
                    {
                      description: `${node.currency} ${formatRange(node.amount, {
                        isScale: false,
                      })}`,
                      icon: 'water',
                      id: 'amount',
                      title: t('funding:amount'),
                    },
                    {
                      description: `${formatRange(node.maturity, { isScale: false })}`,
                      icon: 'hourglass',
                      id: 'maturity',
                      title: t('funding:maturity'),
                    },
                    {
                      description: (
                        <Wrapper
                          isRow
                          s>
                          {node.CreditRating &&
                            withDivider(
                              node.CreditRating.map(({ _id, longTermRating, longTermWatch }) => ({
                                element: (
                                  <Wrapper isRowAlign>
                                    <Text>{longTermRating}</Text>

                                    {longTermWatch && (
                                      <Chip
                                        color={
                                          longTermWatch === CREDIT_RATING_WATCH.POSITIVE
                                            ? THEME_COLOR.SUCCESS
                                            : THEME_COLOR.WARNING
                                        }>
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
                  titleWidth={100}
                />
              </Tile>
            ))}
          </Wrapper>
        )}
      </DataBoundary>
    </MainLayout>
  );
};
