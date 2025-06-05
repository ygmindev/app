import { type _ScatterChartPropsModel } from '@lib/frontend/chart/components/ScatterChart/_ScatterChart.models';
import { type SFCPropsModel } from '@lib/frontend/core/core.models';
import { type ReactElement } from 'react';
import { Scatter, ScatterChart } from 'recharts';

export const _ScatterChart = <TType,>({
  components,
  data,
  height,
  series,
  textStyles,
  width,
}: SFCPropsModel<_ScatterChartPropsModel<TType>>): ReactElement<
  SFCPropsModel<_ScatterChartPropsModel<TType>>
> => (
  <ScatterChart
    data={data}
    height={height}
    style={textStyles}
    width={width}>
    {components}

    {series?.map(({ color, id }) => (
      <Scatter
        dataKey={id}
        fill={color}
        key={id}
        type="monotone"
      />
    ))}
  </ScatterChart>
);
