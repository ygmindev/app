import { Divider } from '#lib-frontend/core/components/Divider/Divider';
import { LineItem } from '#lib-frontend/core/components/LineItem/LineItem';
import { type TilePropsModel } from '#lib-frontend/core/components/Tile/Tile.models';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const Tile: LFCModel<TilePropsModel> = ({
  children,
  description,
  icon,
  image,
  isBorder = true,
  onPress,
  title,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Wrapper
      {...wrapperProps}
      border={isBorder}
      round>
      <LineItem
        icon={icon}
        image={image}
        isBorder={false}
        label={title}
        onPress={onPress}>
        {description}
      </LineItem>

      <Wrapper
        p
        pTop={0}
        s>
        <Divider />

        {children}
      </Wrapper>
    </Wrapper>
  );
};
