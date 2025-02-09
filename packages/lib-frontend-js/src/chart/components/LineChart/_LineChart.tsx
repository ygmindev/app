import { type SFCPropsModel } from '@lib/frontend/core/core.models';
import { type _LineChartPropsModel } from '@lib/frontend/data/components/LineChart/_LineChart.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR_MORE, THEME_ROLE, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { LineChart } from 'LineChart';
import { type CSSProperties, type ReactElement } from 'react';

export const _LineChart = <TType,>({
  children,
  data,
  series,
  xKey,
  ...props
}: SFCPropsModel<_LineChartPropsModel<TType>>): ReactElement<
  SFCPropsModel<_LineChartPropsModel<TType>>
> => {
  const { t } = useTranslation();
  const theme = useTheme();
  const style: CSSProperties = {
    color: theme.color.palette[THEME_COLOR_MORE.SURFACE][THEME_ROLE.CONTRAST],
    fontFamily: theme.font.fontFamily[THEME_ROLE.MAIN],
    fontSize: theme.font.size[THEME_SIZE.MEDIUM],
  };

  return (
    <LineChart
      data={data}
      margin={{
        bottom: theme.shape.spacing[THEME_SIZE.SMALL],
        left: theme.shape.spacing[THEME_SIZE.SMALL],
        right: theme.shape.spacing[THEME_SIZE.SMALL],
        top: theme.shape.spacing[THEME_SIZE.SMALL],
      }}
      style={style}>
      {children}

      {series.map(({ color, id }) => (
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
  );
};
