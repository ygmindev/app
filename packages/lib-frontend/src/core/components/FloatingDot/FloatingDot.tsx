import { type FloatingDotPropsModel } from '@lib/frontend/core/components/FloatingDot/FloatingDot.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { CORNER } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const FloatingDot: LFCModel<FloatingDotPropsModel> = ({
  color = THEME_COLOR.PRIMARY,
  corner = CORNER.TOP_LEFT,
  testID,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const size = 7;
  return (
    <Wrapper
      backgroundColor={color}
      bottom={corner === CORNER.BOTTOM_LEFT || corner === CORNER.BOTTOM_RIGHT ? 0 : undefined}
      height={size}
      left={corner === CORNER.TOP_LEFT || corner === CORNER.BOTTOM_LEFT ? 0 : undefined}
      position={SHAPE_POSITION.ABSOLUTE}
      right={corner === CORNER.TOP_RIGHT || corner === CORNER.BOTTOM_RIGHT ? 0 : undefined}
      round={size / 2}
      style={styles}
      testID={testID}
      top={corner === CORNER.TOP_LEFT || corner === CORNER.TOP_RIGHT ? 0 : undefined}
      width={size}
    />
  );
};
