import { type ProductItemTilePropsModel } from '@lib/frontend/commerce/components/ProductItemTile/ProductItemTile.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const ProductItemTile: LFCModel<ProductItemTilePropsModel> = ({ item, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return <Wrapper {...wrapperProps}></Wrapper>;
};
