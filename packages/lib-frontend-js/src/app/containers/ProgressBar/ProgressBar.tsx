import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type WrapperRefModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const ProgressBar: RLFCModel<WrapperRefModel> = ({ ...props }) => {
  const theme = useTheme();
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Wrapper
      {...wrapperProps}
      animation={{ duration: theme.animation.transition }}
      backgroundColor={THEME_COLOR.PRIMARY}
      height={5}
      left={0}
      position={SHAPE_POSITION.ABSOLUTE}
      top={0}
      width={0}
      zIndex
    />
  );
};
