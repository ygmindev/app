import { type DividerPropsModel } from '#lib-frontend/core/components/Divider/Divider.models';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { DIRECTION } from '#lib-frontend/core/core.constants';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { TranslatableText } from '#lib-frontend/locale/components/TranslatableText/TranslatableText';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR_MORE, THEME_ROLE, THEME_SIZE } from '#lib-frontend/style/style.constants';
import { SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const Divider: LFCModel<DividerPropsModel> = ({ children, isVertical, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const theme = useTheme();
  return (
    <Wrapper
      {...wrapperProps}
      border={isVertical ? DIRECTION.LEFT : DIRECTION.TOP}
      isCenter
      position={SHAPE_POSITION.RELATIVE}>
      {children && (
        <Wrapper
          backgroundColor={theme.color.palette[THEME_COLOR_MORE.SURFACE][THEME_ROLE.MAIN]}
          m="auto"
          p={THEME_SIZE.SMALL}
          position={SHAPE_POSITION.ABSOLUTE}>
          <TranslatableText>{children}</TranslatableText>
        </Wrapper>
      )}
    </Wrapper>
  );
};
