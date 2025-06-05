import { type _BarChartPropsModel } from '@lib/frontend/chart/components/BarChart/_BarChart.models';
import { type SFCPropsModel } from '@lib/frontend/core/core.models';
import { type ReactElement } from 'react';
import { Bar, BarChart } from 'recharts';

export const _BarChart = <TType,>({
  components,
  data,
  height,
  margin,
  series,
  textStyles,
  width,
}: SFCPropsModel<_BarChartPropsModel<TType>>): ReactElement<
  SFCPropsModel<_BarChartPropsModel<TType>>
> => (
  <BarChart
    data={data}
    height={height}
    margin={{ bottom: margin, left: margin, right: margin, top: margin }}
    style={textStyles}
    width={width}>
    {components}

    {series?.map(({ color, id }) => (
      <Bar
        dataKey={id}
        fill={color}
        key={id}
        type="monotone"
      />
    ))}
  </BarChart>
);
