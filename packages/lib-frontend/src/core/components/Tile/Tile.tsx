import { Divider } from '#lib-frontend/core/components/Divider/Divider';
import { LineItem } from '#lib-frontend/core/components/LineItem/LineItem';
import { type TilePropsModel } from '#lib-frontend/core/components/Tile/Tile.models';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';

export const Tile: LFCModel<TilePropsModel> = ({ children, ...props }) => (
  <LineItem
    {...props}
    border
    p
    round>
    {children ? (
      <Wrapper s>
        <Divider />

        {children}
      </Wrapper>
    ) : null}
  </LineItem>
);
