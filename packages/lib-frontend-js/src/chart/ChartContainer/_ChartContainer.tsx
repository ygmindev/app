import { type _ChartContainerPropsModel } from '@lib/frontend/chart/ChartContainer/_ChartContainer.models';
import { type SFCPropsModel } from '@lib/frontend/core/core.models';
import { cloneElement, type CSSProperties, type ReactElement } from 'react';
import { Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { type Payload } from 'recharts/types/component/DefaultLegendContent';

export const _ChartContainer = <TType,>({
  axisColor,
  children,
  components,
  data,
  height,
  series,
  textStyles,
  width,
  xKey,
}: SFCPropsModel<_ChartContainerPropsModel<TType>>): ReactElement<
  SFCPropsModel<_ChartContainerPropsModel<TType>>
> => (
  <ResponsiveContainer>
    {cloneElement(children, {
      components: [
        <XAxis
          dataKey={xKey}
          key="x-axis"
          stroke={axisColor}
          style={textStyles as CSSProperties}
        />,

        <YAxis
          key="y-axis"
          stroke={axisColor}
          style={textStyles as CSSProperties}
        />,

        <Tooltip key="tooltip" />,

        <Legend
          key="legend"
          payload={series as Array<Payload>}
          style={textStyles as CSSProperties}
          verticalAlign="top"
        />,
      ],
      data,
      height,
      series,
      textStyles,
      width,
    })}
  </ResponsiveContainer>
);
