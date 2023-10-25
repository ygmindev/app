import { type ReactElement } from 'react';

import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCPropsModel } from '#lib-frontend/core/core.models';
import { _Chart } from '#lib-frontend/data/components/Chart/_Chart';
import { type ChartPropsModel } from '#lib-frontend/data/components/Chart/Chart.models';
import { TranslatableText } from '#lib-frontend/locale/components/TranslatableText/TranslatableText';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FONT_TYPE } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';

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
      flex
      height={height}
      p
      round
      width={width}>
      {title && <TranslatableText type={FONT_TYPE.TITLE}>{title}</TranslatableText>}

      <_Chart
        {...props}
        gradientStep={0.1}
      />
    </Wrapper>
  );
};
