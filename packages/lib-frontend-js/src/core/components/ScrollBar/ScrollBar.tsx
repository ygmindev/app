import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
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

  const safeSize = size ?? 0;
  const safeContentSize = Math.max(contentSize ?? 1, safeSize, 1);
  const safeValue = value ?? 0;
  const sizeF = Math.max(safeSize ** 2 / safeContentSize, thickness * 2);
  const maxScrollable = safeContentSize - safeSize;
  const maxThumbTravel = safeSize - sizeF;
  const valueF = maxScrollable > 0 ? (safeValue / maxScrollable) * maxThumbTravel : 0;
  return (
    <Wrapper
      {...wrapperProps}
      bottom={0}
      left={isHorizontal ? 0 : undefined}
      position={SHAPE_POSITION.ABSOLUTE}
      right={0}>
      <Wrapper
        backgroundColor={theme.color.border}
        height={isHorizontal ? thickness : size}
        opacity={opacity}
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

      <Wrapper
        bottom={0}
        mRight={THEME_SIZE.SMALL}
        position={SHAPE_POSITION.ABSOLUTE}
        right={thickness}>
        <Button
          icon="arrowUp"
          size={THEME_SIZE.SMALL}
          type={BUTTON_TYPE.FILLED}
        />
      </Wrapper>
    </Wrapper>
  );
};
