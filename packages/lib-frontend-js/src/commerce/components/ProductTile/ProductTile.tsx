import { AddToCartButton } from '@lib/frontend/commerce/components/AddToCartButton/AddToCartButton';
import { PriceTile } from '@lib/frontend/commerce/components/PriceTile/PriceTile';
import { type ProductTilePropsModel } from '@lib/frontend/commerce/components/ProductTile/ProductTile.models';
import { Text } from '@lib/frontend/core/components/Text/Text';
// import { Image } from '@lib/frontend/core/components/Image/Image';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { PRICING_RESOURCE_NAME } from '@lib/model/commerce/Pricing/Pricing.constants';
import { type ProductItemModel } from '@lib/model/commerce/ProductItem/ProductItem.models';
import { type PartialModel } from '@lib/shared/core/core.models';
import { randomInt } from '@lib/shared/crypto/utils/randomInt/randomInt';

export const ProductTile: LFCModel<ProductTilePropsModel> = ({ product, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  console.warn(product);
  const pricing = product[PRICING_RESOURCE_NAME]?.[0];
  const item: PartialModel<ProductItemModel> = {
    imageSrc: product.imageSrc?.[0],
    name: product.name,
    price: pricing?.price,
    pricingId: pricing?._id,
    productId: product._id,
  };
  return (
    <Wrapper
      {...wrapperProps}
      border
      p
      round
      s={THEME_SIZE.SMALL}>
      <WrapperFixture
        height={randomInt(200, 400)}
        width={200}
      />

      {/* <Image
          src={images[0]}
          width={200}
        /> */}

      <Text isBold>{product.name}</Text>

      {pricing && <PriceTile price={pricing.price} />}

      <AddToCartButton
        item={item}
        size={THEME_SIZE.SMALL}
      />
    </Wrapper>
  );
};
