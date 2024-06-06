import { AddToCartButton } from '@lib/frontend/commerce/components/AddToCartButton/AddToCartButton';
import { type ProductTilePropsModel } from '@lib/frontend/commerce/components/ProductTile/ProductTile.models';
import { Text } from '@lib/frontend/core/components/Text/Text';
// import { Image } from '@lib/frontend/core/components/Image/Image';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { type ProductItemModel } from '@lib/shared/commerce/utils/ProductItem/ProductItem.models';
import { randomInt } from '@lib/shared/crypto/utils/randomInt/randomInt';

export const ProductTile: LFCModel<ProductTilePropsModel> = ({ product, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const item: ProductItemModel = {
    name: product.name,
    pricingId: '',
    productId: product._id,
  };
  return (
    <Wrapper
      {...wrapperProps}
      s={THEME_SIZE.SMALL}>
      <Wrapper
        isOverflowHidden
        round>
        <Wrapper
          border
          height={randomInt(200, 400)}
          round
          width={200}
        />

        {/* <Image
          src={images[0]}
          width={200}
        /> */}
      </Wrapper>

      <Text isBold>{product.name}</Text>

      <AddToCartButton
        item={item}
        size={THEME_SIZE.SMALL}
      />
    </Wrapper>
  );
};
