import { Divider } from '#lib-frontend/core/components/Divider/Divider';
import { PressableItem } from '#lib-frontend/core/components/PressableItem/PressableItem';
import { type TilePropsModel } from '#lib-frontend/core/components/Tile/Tile.models';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { FONT_TYPE } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';

export const Tile: LFCModel<TilePropsModel> = ({ children, title, ...props }) => (
  <PressableItem
    {...props}
    border
    p
    round
    title={title}
    type={FONT_TYPE.TITLE}>
    {children ? (
      <>
        {title && <Divider key="divider" />}

        {children}
      </>
    ) : null}
  </PressableItem>
);
