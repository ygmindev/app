import { Skeleton } from '@lib/frontend/animation/components/Skeleton/Skeleton';
import { PRODUCT } from '@lib/frontend/commerce/commerce.constants';
import { Price } from '@lib/frontend/commerce/components/Price/Price';
import { useProductResource } from '@lib/frontend/commerce/hooks/useProductResource/useProductResource';
import {
  type ProductPageParamsModle,
  type ProductPagePropsModel,
} from '@lib/frontend/commerce/pages/ProductPage/ProductPage.models';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { DataBoundary } from '@lib/frontend/data/components/DataBoundary/DataBoundary';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useActions } from '@lib/frontend/state/hooks/useActions/useActions';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FONT_STYLE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { PRICING_RESOURCE_NAME } from '@lib/shared/commerce/resources/Pricing/Pricing.constants';
import { type ProductModel } from '@lib/shared/commerce/resources/Product/Product.models';
import { type ProductItemModel } from '@lib/shared/commerce/utils/ProductItem/ProductItem.models';
import { type PartialModel } from '@lib/shared/core/core.models';
import { useState } from 'react';

export const ProductPage: LFCModel<ProductPagePropsModel> = ({ ...props }) => {
  const { t } = useTranslation();
  const { wrapperProps } = useLayoutStyles({ props });
  const { location } = useRouter<ProductPageParamsModle>();
  const { get } = useProductResource();

  const actions = useActions();
  const [product, productSet] = useState<ProductItemModel>();
  const [products] = useStore('commerce.products');

  const getProduct = async (): Promise<PartialModel<ProductModel> | undefined> => {
    const result = (await get({ filter: [{ field: '_id', value: location.params?.id }] }))?.result;
    const pricing = result?.[PRICING_RESOURCE_NAME]?.[0];
    pricing &&
      productSet({
        name: result.name ?? '',
        price: pricing.price,
        pricingId: pricing._id,
        productId: result._id ?? '',
      });
    return result;
  };

  const handleAdd = (product?: ProductItemModel): void => {
    if (product) {
      const i = products?.findIndex(
        (v) => v.productId === product?.productId && v.pricingId === product?.pricingId,
      );
      const productF = i !== undefined && products?.[i];
      productF && i >= 0
        ? actions?.commerce.productsUpdate([
            i,
            { ...productF, quantity: (products?.[i]?.quantity ?? 0) + 1 },
          ])
        : actions?.commerce.productsAdd(product);
    }
  };

  return (
    <DataBoundary
      {...wrapperProps}
      flex
      id={PRODUCT}
      query={getProduct}>
      {({ data }) => (
        <MainLayout
          bottomElement={
            <Button
              elementState={product ? undefined : ELEMENT_STATE.DISABLED}
              icon="add"
              onPress={() => handleAdd(product)}>
              {t('commerce:addToCart')}
            </Button>
          }
          isFullHeight
          s>
          <Skeleton>
            <Text fontStyle={FONT_STYLE.TITLE}>{data?.name}</Text>
          </Skeleton>

          {data?.[PRICING_RESOURCE_NAME]?.map((pricing) => (
            <Price
              currency={pricing.currency}
              key={pricing._id}
              price={pricing.price}
            />
          ))}
        </MainLayout>
      )}
    </DataBoundary>
  );
};
