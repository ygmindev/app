import { AsyncText } from '@lib/frontend/core/components/AsyncText/AsyncText';
import { type DividerPropsModel } from '@lib/frontend/core/components/Divider/Divider.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { DIRECTION } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_COLOR_MORE, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const Divider: LFCModel<DividerPropsModel> = ({
  children,
  isVertical,
  m,
  mHorizontal,
  mVertical,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Wrapper
      {...wrapperProps}
      isAlign
      isFullWidth={!isVertical}
      isRow
      position={SHAPE_POSITION.RELATIVE}
      zIndex>
      <Wrapper
        border={isVertical ? DIRECTION.LEFT : DIRECTION.TOP}
        bottom={isVertical ? 0 : undefined}
        left={isVertical ? undefined : 0}
        m={m}
        mHorizontal={mHorizontal}
        mVertical={mVertical}
        position={SHAPE_POSITION.ABSOLUTE}
        right={isVertical ? undefined : 0}
        top={isVertical ? 0 : undefined}
      />

      {children && (
        <Wrapper
          backgroundColor={THEME_COLOR_MORE.SURFACE}
          m="auto"
          pHorizontal={THEME_SIZE.SMALL}>
          <AsyncText>{children}</AsyncText>
        </Wrapper>
      )}
    </Wrapper>
  );
};
