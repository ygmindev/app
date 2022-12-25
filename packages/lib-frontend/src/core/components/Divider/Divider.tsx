import type { DividerPropsModel } from '@lib/frontend/core/components/Divider/Divider.models';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { BORDER_DIRECTION } from '@lib/frontend/style/utils/styler/borderStyler/borderStyler.constants';
import { FLEX_ALIGN } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { THEME_RELATIVE_COLOR } from '@lib/frontend/style/style.constants';

export const Divider: SFCModel<DividerPropsModel> = ({
  children,
  mHorizontal,
  mVertical,
  testID,
  ...props
}) => {
  const { styles } = useStyles({ props });
  return (
    <Wrapper
      border={BORDER_DIRECTION.TOP}
      isCenter
      isFullWidth
      mHorizontal={mHorizontal}
      mVertical={mVertical}
      position={SHAPE_POSITION.RELATIVE}
      style={styles}
      testID={testID}>
      {children ? (
        <Wrapper
          backgroundColor={THEME_RELATIVE_COLOR.MAIN}
          pHorizontal
          position={SHAPE_POSITION.ABSOLUTE}
          self={FLEX_ALIGN.CENTER}>
          <Text color={THEME_RELATIVE_COLOR.MUTED}>{children}</Text>
        </Wrapper>
      ) : null}
    </Wrapper>
  );
};
