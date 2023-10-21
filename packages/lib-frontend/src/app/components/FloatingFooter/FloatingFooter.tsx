import { type FloatingFooterPropsModel } from '#lib-frontend/app/components/FloatingFooter/FloatingFooter.models';
import { Portal } from '#lib-frontend/core/components/Portal/Portal';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type FCModel } from '#lib-frontend/core/core.models';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';
import { SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const FloatingFooter: FCModel<FloatingFooterPropsModel> = ({ children }) => {
  const theme = useTheme();
  return (
    <Portal>
      <Wrapper
        bottom={theme.shape.spacing[THEME_SIZE.MEDIUM]}
        isFullWidth
        position={SHAPE_POSITION.ABSOLUTE}
        zIndex>
        <Wrapper mHorizontal="auto">{children}</Wrapper>
      </Wrapper>
    </Portal>
  );
};
