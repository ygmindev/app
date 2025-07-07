import { type TilePropsModel } from '@lib/frontend/core/components/Tile/Tile.models';
import { Title } from '@lib/frontend/core/components/Title/Title';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { DIRECTION } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FONT_STYLE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';

export const Tile: LFCModel<TilePropsModel> = ({
  children,
  description,
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
        <Title
          border={!!children && DIRECTION.BOTTOM}
          description={description}
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
