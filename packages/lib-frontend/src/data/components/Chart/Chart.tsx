import { type ReactElement } from 'react';

import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type SFCPropsModel } from '#lib-frontend/core/core.models';
import { _Chart } from '#lib-frontend/data/components/Chart/_Chart';
import { type ChartPropsModel } from '#lib-frontend/data/components/Chart/Chart.models';
import { TranslatableText } from '#lib-frontend/locale/components/TranslatableText/TranslatableText';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import {
  FONT_ALIGN,
  FONT_TYPE,
} from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';

export const Chart = <TType,>({
  height,
  testID,
  title,
  width,
  ...props
}: SFCPropsModel<ChartPropsModel<TType>>): ReactElement<SFCPropsModel<ChartPropsModel<TType>>> => {
  const { styles } = useStyles({ props });
  return (
    <Wrapper
      border
      grow
      height={height}
      p
      round
      style={styles}
      testID={testID}
      width={width}>
      {title && (
        <TranslatableText
          align={FONT_ALIGN.CENTER}
          type={FONT_TYPE.TITLE}>
          {title}
        </TranslatableText>
      )}

      <_Chart {...props} />
    </Wrapper>
  );
};
