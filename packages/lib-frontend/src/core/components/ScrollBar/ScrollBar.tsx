import { type ScrollBarPropsModel } from '@lib/frontend/core/components/ScrollBar/ScrollBar.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const ScrollBar: LFCModel<ScrollBarPropsModel> = ({
  contentSize,
  isHorizontal,
  size,
  value,
  ...props
}) => {
  const theme = useTheme();
  const { wrapperProps } = useLayoutStyles({ props });
  const opacity = theme.opaque[THEME_SIZE.SMALL];
  const { thickness } = theme.layout.scrollBar;
  const sizeF = (size ?? 0) ** 2 / (contentSize ?? 1);
  const valueF = ((size ?? 0) * (value ?? 0)) / (contentSize ?? 0);
  return (
    <Wrapper
      {...wrapperProps}
      backgroundColor={theme.color.border}
      bottom={0}
      height={isHorizontal ? thickness : size}
      left={isHorizontal ? 0 : undefined}
      opacity={opacity}
      position={SHAPE_POSITION.ABSOLUTE}
      right={0}
      round
      top={isHorizontal ? undefined : 0}
      width={isHorizontal ? size : thickness}>
      <Wrapper
        backgroundColor={THEME_COLOR.PRIMARY}
        height={isHorizontal ? thickness : sizeF}
        left={isHorizontal ? valueF : undefined}
        position={SHAPE_POSITION.ABSOLUTE}
        round
        top={isHorizontal ? undefined : valueF}
        width={isHorizontal ? sizeF : thickness}
      />
    </Wrapper>
  );
};
