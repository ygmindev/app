import type { DividerPropsModel } from '@lib/frontend/core/components/Divider/Divider.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { TranslatableText } from '@lib/frontend/locale/components/TranslatableText/TranslatableText';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { THEME_COLOR, THEME_ROLE } from '@lib/frontend/style/style.constants';
import { BORDER_DIRECTION } from '@lib/frontend/style/utils/styler/borderStyler/borderStyler.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { spacingStyler } from '@lib/frontend/style/utils/styler/spacingStyler/spacingStyler';

export const Divider: SFCModel<DividerPropsModel> = ({ children, testID, ...props }) => {
  const { styles } = useStyles({ props, stylers: [spacingStyler] });
  return (
    <Wrapper
      border={BORDER_DIRECTION.TOP}
      borderRole={THEME_ROLE.MUTED}
      isCenter
      isFullWidth
      position={SHAPE_POSITION.RELATIVE}
      style={styles}
      testID={testID}>
      {children ? (
        <Wrapper
          backgroundColor={THEME_COLOR.NEUTRAL}
          m="auto"
          pHorizontal
          position={SHAPE_POSITION.ABSOLUTE}>
          <TranslatableText>{children}</TranslatableText>
        </Wrapper>
      ) : null}
    </Wrapper>
  );
};
