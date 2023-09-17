import uniq from 'lodash/uniq';

import { Tile } from '#lib-frontend/core/components/Tile/Tile';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { DataBoundary } from '#lib-frontend/data/components/DataBoundary/DataBoundary';
import { ItemTable } from '#lib-frontend/data/components/ItemTable/ItemTable';
import { useFormatter } from '#lib-frontend/data/hooks/useFormatter/useFormatter';
import { useFundingResource } from '#lib-frontend/funding/hooks/useFundingResource/useFundingResource';
import { type FundingInProgressPagePropsModel } from '#lib-frontend/funding/pages/FundingInProgressPage/FundingInProgressPage.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { filterNil } from '#lib-shared/core/utils/filterNil/filterNil';
import { CREDIT_RATING_WATCH } from '#lib-shared/funding/resources/CreditRating/CreditRating.constants';

export const FundingInProgressPage: LFCModel<FundingInProgressPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation();
  const { format, formatRange } = useFormatter();
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
            {data?.result?.edges.map(({ node }) => {
              const creditRatings = uniq(
                filterNil(
                  node.CreditRating?.map(
                    ({ longTermCategory, longTermWatch }) =>
                      `${longTermCategory}${
                        longTermWatch === CREDIT_RATING_WATCH.POSITIVE
                          ? '*+'
                          : longTermWatch === CREDIT_RATING_WATCH.NEGATIVE
                          ? '*-'
                          : ''
                      }`,
                  ),
                ),
              ).join('/');
              return (
                <Tile
                  key={node._id}
                  onPress={() => null}>
                  <ItemTable
                    data={[
                      {
                        description: `${node.currency} ${formatRange(node.amount, {
                          isScale: false,
                        })}`,
                        icon: 'water',
                        title: t('funding:amount'),
                      },
                      {
                        description: `${formatRange(node.maturity, { isScale: false })}`,
                        icon: 'hourglass',
                        title: t('funding:maturity'),
                      },
                      {
                        description: creditRatings,
                        icon: 'speedometer',
                        title: t('funding:creditRating'),
                      },
                    ]}
                  />
                </Tile>
              );
            })}
          </Wrapper>
        )}
      </DataBoundary>
    </MainLayout>
  );
};
