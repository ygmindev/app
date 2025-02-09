import { _ChartContainer } from '@lib/frontend/chart/ChartContainer/_ChartContainer';
import { type ChartContainerPropsModel } from '@lib/frontend/chart/ChartContainer/ChartContainer.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type MeasureModel, type SFCPropsModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import {
  THEME_COLOR,
  THEME_COLOR_MORE,
  THEME_ROLE,
  THEME_SIZE,
} from '@lib/frontend/style/style.constants';
import { palette } from '@lib/frontend/style/utils/palette/palette';
import { type ReactElement, useMemo, useState } from 'react';

export const ChartContainer = <TType,>({
  series,
  ...props
}: SFCPropsModel<ChartContainerPropsModel<TType>>): ReactElement<
  SFCPropsModel<ChartContainerPropsModel<TType>>
> => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [measure, measureSet] = useState<MeasureModel>();
  const { wrapperProps } = useLayoutStyles({ props });

  const seriesF = useMemo(
    () =>
      series?.map(({ color, id, value }, i) => ({
        color:
          color ??
          (i
            ? palette(theme.color.palette[THEME_COLOR.PRIMARY][THEME_ROLE.MAIN], {
                lightness: 0.5 + i * 0.07,
              })
            : theme.color.palette[THEME_COLOR.PRIMARY][THEME_ROLE.MAIN]),
        id,
        value: value ? t(value) : id,
      })) ?? [],
    [series, theme, t],
  );

  return (
    <Wrapper
      {...wrapperProps}
      flex
      onMeasure={measureSet}>
      <_ChartContainer
        {...props}
        axisColor={theme.color.palette[THEME_COLOR_MORE.SURFACE][THEME_ROLE.CONTRAST]}
        height={measure?.height}
        series={seriesF}
        textStyles={{
          color: theme.color.palette[THEME_COLOR_MORE.SURFACE][THEME_ROLE.CONTRAST],
          fontFamily: theme.font.fontFamily[THEME_ROLE.MAIN],
          fontSize: theme.font.size[THEME_SIZE.MEDIUM],
        }}
        width={measure?.width}
      />
    </Wrapper>
  );
};
