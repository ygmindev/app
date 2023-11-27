import { Divider } from '#lib-frontend/core/components/Divider/Divider';
import { LineItem } from '#lib-frontend/core/components/LineItem/LineItem';
import { type TilePropsModel } from '#lib-frontend/core/components/Tile/Tile.models';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { FONT_TYPE } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';

export const Tile: LFCModel<TilePropsModel> = ({ children, ...props }) => (
  <LineItem
    {...props}
    border
    p
    round
    type={FONT_TYPE.TITLE}>
    {children ? (
      <>
        <Divider key="divider" />

        {children}
      </>
    ) : null}
  </LineItem>
);
