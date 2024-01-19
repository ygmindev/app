import { type FloatingFooterPropsModel } from '@lib/frontend/app/components/FloatingFooter/FloatingFooter.models';
import { Portal } from '@lib/frontend/core/components/Portal/Portal';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const FloatingFooter: LFCModel<FloatingFooterPropsModel> = ({ children, ...props }) => {
  const theme = useTheme();
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Portal>
      <Wrapper
        {...wrapperProps}
        bottom={theme.shape.spacing[THEME_SIZE.MEDIUM]}
        position={SHAPE_POSITION.ABSOLUTE}
        right={theme.shape.spacing[THEME_SIZE.MEDIUM]}
        zIndex>
        {children}
      </Wrapper>
    </Portal>
  );
};
