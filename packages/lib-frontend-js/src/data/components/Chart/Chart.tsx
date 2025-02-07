import { AsyncText } from '@lib/frontend/core/components/AsyncText/AsyncText';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCPropsModel } from '@lib/frontend/core/core.models';
import { _Chart } from '@lib/frontend/data/components/Chart/_Chart';
import { type ChartPropsModel } from '@lib/frontend/data/components/Chart/Chart.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FONT_STYLE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { type ReactElement } from 'react';

export const Chart = <TType,>({
  height,
  title,
  width,
  ...props
}: LFCPropsModel<ChartPropsModel<TType>>): ReactElement<LFCPropsModel<ChartPropsModel<TType>>> => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Wrapper
      {...wrapperProps}
      border
      height={height}
      p
      round
      width={width}>
      {title && <AsyncText fontStyle={FONT_STYLE.TITLE}>{title}</AsyncText>}

      <_Chart
        {...props}
        gradientStep={0.1}
      />
    </Wrapper>
  );
};
