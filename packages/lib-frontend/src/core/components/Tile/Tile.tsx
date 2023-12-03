import { Activatable } from '#lib-frontend/core/components/Activatable/Activatable';
import { PressableItem } from '#lib-frontend/core/components/PressableItem/PressableItem';
import { type TilePropsModel } from '#lib-frontend/core/components/Tile/Tile.models';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FONT_TYPE } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';

export const Tile: LFCModel<TilePropsModel> = ({ children, icon, image, title, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Activatable>
      {(isActive) => (
        <Wrapper
          {...wrapperProps}
          border
          pHorizontal
          round>
          <PressableItem
            elementState={isActive ? ELEMENT_STATE.ACTIVE : undefined}
            icon={icon}
            image={image}
            pVertical
            title={title}
            type={FONT_TYPE.TITLE}
          />

          {children}
        </Wrapper>
      )}
    </Activatable>
  );
};
