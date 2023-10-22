import { Activatable } from '#lib-frontend/core/components/Activatable/Activatable';
import { Divider } from '#lib-frontend/core/components/Divider/Divider';
import { LineItem } from '#lib-frontend/core/components/LineItem/LineItem';
import { type TilePropsModel } from '#lib-frontend/core/components/Tile/Tile.models';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
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
    <Activatable>
      {(isActive) => (
        <Wrapper
          {...wrapperProps}
          border={isBorder}
          onPress={onPress}
          round>
          <LineItem
            elementState={isActive ? ELEMENT_STATE.ACTIVE : undefined}
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
      )}
    </Activatable>
  );
};
