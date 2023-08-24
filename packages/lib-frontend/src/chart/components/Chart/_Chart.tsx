import { type CSSProperties, type ReactElement, useMemo } from 'react';
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { type Payload } from 'recharts/types/component/DefaultLegendContent';

import { type _ChartPropsModel } from '#lib-frontend/chart/components/Chart/_Chart.models';
import { type SFCPropsModel } from '#lib-frontend/core/core.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import {
  THEME_COLOR,
  THEME_COLOR_MORE,
  THEME_ROLE,
  THEME_SIZE,
} from '#lib-frontend/style/style.constants';
import { palette } from '#lib-frontend/style/utils/palette/palette';

export const _Chart = <TType,>({
  data,
  gradientStep,
  series,
  ...props
}: SFCPropsModel<_ChartPropsModel<TType>>): ReactElement<
  SFCPropsModel<_ChartPropsModel<TType>>
> => {
  const { t } = useTranslation();
  const theme = useTheme();
  const spacing = theme.shape.spacing[THEME_SIZE.MEDIUM];
  const style: CSSProperties = {
    fontFamily: theme.font.fontFamily.main,
    fontSize: theme.font.size[THEME_SIZE.MEDIUM],
  };

  const seriesF = useMemo<Array<Payload>>(
    () =>
      series
        ? series.map(({ id, title }, i) => ({
            color: i
              ? palette(theme.color.palette[THEME_COLOR.PRIMARY][THEME_ROLE.MAIN], {
                  lightness: 0.5 + i * 0.1,
                })
              : theme.color.palette[THEME_COLOR.PRIMARY][THEME_ROLE.MAIN],
            id,
            value: title ? t(title) : id,
          }))
        : [],
    [series],
  );

  return (
    <ResponsiveContainer>
      <LineChart
        data={data}
        margin={{ bottom: spacing, left: spacing, right: spacing, top: spacing }}>
        <XAxis
          stroke={theme.color.palette[THEME_COLOR_MORE.SURFACE][THEME_ROLE.CONTRAST]}
          style={style}
        />

        <YAxis
          stroke={theme.color.palette[THEME_COLOR_MORE.SURFACE][THEME_ROLE.CONTRAST]}
          style={style}
        />

        <Tooltip />

        <Legend payload={seriesF} />

        {seriesF.map(({ color, id }) => (
          <Line
            dataKey={id}
            key={id}
            stroke={color}
            strokeWidth={2}
            type="monotone"
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};
