import { type _LineChartPropsModel } from '@lib/frontend/chart/components/LineChart/_LineChart.models';
import { type SFCPropsModel } from '@lib/frontend/core/core.models';
import { type ReactElement } from 'react';
import { Line, LineChart } from 'recharts';

export const _LineChart = <TType,>({
  components,
  data,
  height,
  series,
  textStyles,
  width,
}: SFCPropsModel<_LineChartPropsModel<TType>>): ReactElement<
  SFCPropsModel<_LineChartPropsModel<TType>>
> => (
  <LineChart
    data={data}
    height={height}
    style={textStyles}
    width={width}>
    {components}

    {series?.map(({ color, id }) => (
      <Line
        dataKey={id}
        dot={false}
        key={id}
        stroke={color}
        strokeWidth={2}
        type="monotone"
      />
    ))}
  </LineChart>
);
