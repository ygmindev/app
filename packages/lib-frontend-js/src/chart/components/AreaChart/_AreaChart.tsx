import { type _AreaChartPropsModel } from '@lib/frontend/chart/components/AreaChart/_AreaChart.models';
import { type SFCPropsModel } from '@lib/frontend/core/core.models';
import { type ReactElement } from 'react';
import { Area, AreaChart } from 'recharts';

export const _AreaChart = <TType,>({
  components,
  data,
  height,
  series,
  textStyles,
  width,
}: SFCPropsModel<_AreaChartPropsModel<TType>>): ReactElement<
  SFCPropsModel<_AreaChartPropsModel<TType>>
> => (
  <AreaChart
    data={data}
    height={height}
    style={textStyles}
    width={width}>
    <defs>
      {series?.map(({ color, id }) => (
        <linearGradient
          id={id}
          key={id}
          x1="0"
          x2="0"
          y1="0"
          y2="1">
          <stop
            offset="5%"
            stopColor={color}
            stopOpacity={0.8}
          />
          <stop
            offset="95%"
            stopColor={color}
            stopOpacity={0}
          />
        </linearGradient>
      ))}
    </defs>

    {components}

    {series?.map(({ color, id }) => (
      <Area
        dataKey={id}
        dot={false}
        fill={`url(#${id})`}
        fillOpacity={1}
        key={id}
        stroke={color}
        strokeWidth={2}
        type="monotone"
      />
    ))}
  </AreaChart>
);
