import random from 'lodash/random';
import range from 'lodash/range';

import { type SFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { Chart } from '#lib-frontend/data/components/Chart/Chart';
import { type FundingSummaryPagePropsModel } from '#lib-frontend/funding/pages/FundingSummaryPage/FundingSummaryPage.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';

export const FundingSummaryPage: SFCModel<FundingSummaryPagePropsModel> = ({
  testID,
  ...props
}) => {
  const { t } = useTranslation();
  const { styles } = useStyles({ props });
  return (
    <MainLayout
      p
      style={styles}
      testID={testID}>
      <Chart
        data={range(0, 30).map((i) => ({
          '10y': random(6, 8, true),
          '2y': random(2, 3, true),
          '30y': random(8, 10, true),
          '3y': random(3, 5, true),
          '5y': random(4, 6, true),
        }))}
        gradientStep={10}
        series={[{ _id: '2y' }, { _id: '3y' }, { _id: '5y' }, { _id: '10y' }, { _id: '30y' }]}
        title={t('funding:fundingCost')}
      />
    </MainLayout>
  );
};
