import { type _ChartContainerPropsModel } from '@lib/frontend/chart/ChartContainer/_ChartContainer.models';
import { type SFCPropsModel } from '@lib/frontend/core/core.models';
import { cloneElement, type CSSProperties, type ReactElement } from 'react';
import { Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { type Payload } from 'recharts/types/component/DefaultLegendContent';

export const _ChartContainer = <TType,>({
  axisColor,
  children,
  data,
  height,
  series,
  textStyles,
  width,
  xKey,
}: SFCPropsModel<_ChartContainerPropsModel<TType>>): ReactElement<
  SFCPropsModel<_ChartContainerPropsModel<TType>>
> => {
  return (
    <ResponsiveContainer>
      {cloneElement(children, {
        children: (
          <>
            <XAxis
              dataKey={xKey}
              stroke={axisColor}
              style={textStyles as CSSProperties}
            />

            <YAxis
              stroke={axisColor}
              style={textStyles as CSSProperties}
            />

            <Tooltip />

            <Legend
              payload={series as Array<Payload>}
              style={textStyles as CSSProperties}
            />
          </>
        ),
        data,
        height,
        series,
        textStyles,
        width,
      })}
    </ResponsiveContainer>
  );
};
