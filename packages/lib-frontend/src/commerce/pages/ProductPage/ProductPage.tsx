import { Skeleton } from '@lib/frontend/animation/components/Skeleton/Skeleton';
import { PRODUCT } from '@lib/frontend/commerce/commerce.constants';
import { PriceTile } from '@lib/frontend/commerce/components/PriceTile/PriceTile';
import { useProductResource } from '@lib/frontend/commerce/hooks/useProductResource/useProductResource';
import {
  type ProductPageParamsModel,
  type ProductPagePropsModel,
} from '@lib/frontend/commerce/pages/ProductPage/ProductPage.models';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { DataBoundary } from '@lib/frontend/data/components/DataBoundary/DataBoundary';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FONT_STYLE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { PRICING_RESOURCE_NAME } from '@lib/shared/commerce/resources/Pricing/Pricing.constants';
import { type ProductModel } from '@lib/shared/commerce/resources/Product/Product.models';
import { type EntityResourcePartialModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { useState } from 'react';

export const ProductPage: LFCModel<ProductPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { location } = useRouter<ProductPageParamsModel>();
  const { get } = useProductResource();

  const [product, productSet] = useState<EntityResourcePartialModel<ProductModel>>();

  const getProduct = async (): Promise<EntityResourcePartialModel<ProductModel> | undefined> => {
    const result = (await get({ filter: [{ field: '_id', value: location.params?.id }] }))?.result;
    return result && { ...result, _id: result._id ?? '' };
  };

  return (
    <DataBoundary
      {...wrapperProps}
      flex
      id={PRODUCT}
      query={getProduct}>
      {({ data }) => (
        <MainLayout
          // bottomElement={
          //   <AddToCartButton
          //     elementState={product ? undefined : ELEMENT_STATE.DISABLED}
          //     icon="add"
          //     item={data}
          //   />
          // }
          isFullHeight
          s>
          <Skeleton>
            <Text fontStyle={FONT_STYLE.TITLE}>{data?.name}</Text>
          </Skeleton>

          {data?.[PRICING_RESOURCE_NAME]?.map((pricing) => (
            <PriceTile
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
