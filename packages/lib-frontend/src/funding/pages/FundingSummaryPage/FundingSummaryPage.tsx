import { Chart } from '#lib-frontend/chart/components/Chart/Chart';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { type FundingSummaryPagePropsModel } from '#lib-frontend/funding/pages/FundingSummaryPage/FundingSummaryPage.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';

export const FundingSummaryPage: SFCModel<FundingSummaryPagePropsModel> = ({
  testID,
  ...props
}) => {
  const { styles } = useStyles({ props });
  return (
    <Wrapper
      grow
      style={styles}
      testID={testID}>
      <Chart
        data={[
          { x: 1, y: 1, z: 2 },
          { x: 2, y: 3, z: 4 },
        ]}
        gradientStep={10}
        series={[{ id: 'y' }, { id: 'z' }]}
      />
    </Wrapper>
  );
};
