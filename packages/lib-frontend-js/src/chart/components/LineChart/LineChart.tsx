import { ChartContainer } from '@lib/frontend/chart/ChartContainer/ChartContainer';
import { _LineChart } from '@lib/frontend/chart/components/LineChart/_LineChart';
import { type LineChartPropsModel } from '@lib/frontend/chart/components/LineChart/LineChart.models';
import { type SFCPropsModel } from '@lib/frontend/core/core.models';
import { useApi } from '@lib/frontend/http/hooks/useApi/useApi';
import { GRAPHQL } from '@lib/shared/graphql/graphql.constants';
import { type ReactElement, useEffect } from 'react';

export const LineChart = <TType,>({
  ...props
}: SFCPropsModel<LineChartPropsModel<TType>>): ReactElement<
  SFCPropsModel<LineChartPropsModel<TType>>
> => {
  const http = useApi({
    host: process.env.SERVER_APP_HOST,
    pathname: `api/${GRAPHQL}`,
    port: process.env.SERVER_APP_PORT,
  });

  useEffect(() => {
    1 + 1 === 2 &&
      void http
        .post({
          params: {
            query: 'mutation messageQuery { messageQuery { id message sent } }',
          },
          url: '',
        })
        .then(console.warn);
  }, []);

  return (
    <ChartContainer {...props}>
      <_LineChart />
    </ChartContainer>
  );
};

// import { ChartContainer } from '@lib/frontend/chart/ChartContainer/ChartContainer';
// import { _LineChart } from '@lib/frontend/chart/components/LineChart/_LineChart';
// import { type LineChartPropsModel } from '@lib/frontend/chart/components/LineChart/LineChart.models';
// import { type SFCPropsModel } from '@lib/frontend/core/core.models';
// import { type ReactElement } from 'react';

// export const LineChart = <TType,>({
//   ...props
// }: SFCPropsModel<LineChartPropsModel<TType>>): ReactElement<
//   SFCPropsModel<LineChartPropsModel<TType>>
// > => (
//   <ChartContainer {...props}>
//     <_LineChart />
//   </ChartContainer>
// );
