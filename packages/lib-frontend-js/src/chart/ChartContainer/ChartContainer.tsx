import { type _ChartContainerPropsModel } from '@lib/frontend/chart/ChartContainer/_ChartContainer.models';
import { type SFCPropsModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import {
  THEME_COLOR,
  THEME_COLOR_MORE,
  THEME_ROLE,
  THEME_SIZE,
} from '@lib/frontend/style/style.constants';
import { palette } from '@lib/frontend/style/utils/palette/palette';
import { type CSSProperties, type ReactElement, useMemo } from 'react';
import { Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { type Payload } from 'recharts/types/component/DefaultLegendContent';

export const _ChartContainer = <TType,>({
  data,
  gradientStep,
  series,
  children,
  xKey,
  ...props
}: SFCPropsModel<_ChartContainerPropsModel<TType>>): ReactElement<
  SFCPropsModel<_ChartContainerPropsModel<TType>>
> => {
  const { t } = useTranslation();
  const theme = useTheme();
  const style: CSSProperties = {
    color: theme.color.palette[THEME_COLOR_MORE.SURFACE][THEME_ROLE.CONTRAST],
    fontFamily: theme.font.fontFamily[THEME_ROLE.MAIN],
    fontSize: theme.font.size[THEME_SIZE.MEDIUM],
  };

  const seriesF = useMemo<Array<Payload>>(
    () =>
      series?.map(({ id, title }, i) => ({
        color: i
          ? palette(theme.color.palette[THEME_COLOR.PRIMARY][THEME_ROLE.MAIN], {
              lightness: 0.5 + i * 0.07,
            })
          : theme.color.palette[THEME_COLOR.PRIMARY][THEME_ROLE.MAIN],
        id,
        value: title ? t(title) : id,
      })) ?? [],
    [series],
  );

  return (
    <ResponsiveContainer>
      <LineChart
        data={data}
        margin={{
          bottom: theme.shape.spacing[THEME_SIZE.SMALL],
          left: theme.shape.spacing[THEME_SIZE.SMALL],
          right: theme.shape.spacing[THEME_SIZE.SMALL],
          top: theme.shape.spacing[THEME_SIZE.SMALL],
        }}
        style={style}>
        <XAxis
          dataKey={xKey}
          stroke={theme.color.palette[THEME_COLOR_MORE.SURFACE][THEME_ROLE.CONTRAST]}
          style={style}
        />

        <YAxis
          stroke={theme.color.palette[THEME_COLOR_MORE.SURFACE][THEME_ROLE.CONTRAST]}
          style={style}
        />

        <Tooltip />

        <Legend
          payload={seriesF}
          style={style}
        />

        {seriesF.map(({ color, id }) => (
          <Line
            dataKey={id}
            key={id}
            stroke={color}
            strokeWidth={2}
            style={style}
            type="monotone"
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};
