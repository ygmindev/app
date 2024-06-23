import { PressableTitle } from '@lib/frontend/core/components/PressableTitle/PressableTitle';
import { type TilePropsModel } from '@lib/frontend/core/components/Tile/Tile.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { DIRECTION } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FONT_STYLE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';

export const Tile: LFCModel<TilePropsModel> = ({
  children,
  icon,
  image,
  onPress,
  rightElement,
  title,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Wrapper
      {...wrapperProps}
      border
      onPress={onPress}
      pHorizontal
      round>
      {title && (
        <PressableTitle
          border={!!children && DIRECTION.BOTTOM}
          fontStyle={FONT_STYLE.TITLE}
          icon={icon}
          image={image}
          pVertical
          rightElement={rightElement}
          title={title}
        />
      )}

      {children}
    </Wrapper>
  );
};
