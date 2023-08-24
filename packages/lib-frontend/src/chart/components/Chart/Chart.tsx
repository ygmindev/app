import { type ReactElement } from 'react';

import { _Chart } from '#lib-frontend/chart/components/Chart/_Chart';
import { type ChartPropsModel } from '#lib-frontend/chart/components/Chart/Chart.models';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type SFCPropsModel } from '#lib-frontend/core/core.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';

export const Chart = <TType,>({
  testID,
  ...props
}: SFCPropsModel<ChartPropsModel<TType>>): ReactElement<SFCPropsModel<ChartPropsModel<TType>>> => {
  const { styles } = useStyles({ props });
  return (
    <Wrapper
      grow
      style={styles}
      testID={testID}>
      <_Chart {...props} />
    </Wrapper>
  );
};
