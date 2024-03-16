import { PRODUCT } from '@lib/frontend/commerce/commerce.constants';
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
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { PRICING_RESOURCE_NAME } from '@lib/shared/commerce/resources/Pricing/Pricing.constants';
import { type ProductModel } from '@lib/shared/commerce/resources/Product/Product.models';
import { type PartialModel } from '@lib/shared/core/core.models';

export const ProductPage: LFCModel<ProductPagePropsModel> = ({ ...props }) => {
  const { t } = useTranslation();
  const { wrapperProps } = useLayoutStyles({ props });
  const { location } = useRouter<ProductPageParamsModle>();
  const { get } = useProductResource();
  const [products, productsSet] = useStore('commerce.products');

  const handleAdd = (product?: PartialModel<ProductModel>): void => {
    if (product) {
      const index = products?.findIndex((v) => v.productId === product._id);
      if (index !== undefined && index >= 0) {
      }
      // const pricingF = index !== undefined && index >= 0 && products?.[index];
    }
  };

  return (
    <DataBoundary
      {...wrapperProps}
      flex
      id={PRODUCT}
      params={{ filter: [{ field: '_id', value: location.params?.id }] }}
      query={get}>
      {({ data }) => (
        <MainLayout
          bottomElement={
            <Button
              elementState={data?.result ? undefined : ELEMENT_STATE.DISABLED}
              icon="add"
              onPress={() => handleAdd(data?.result)}>
              {t('commerce:addToCart')}
            </Button>
          }
          isFullHeight
          s>
          <Text>{data?.result?.name}</Text>

          {data?.result?.[PRICING_RESOURCE_NAME]?.map((pricing) => (
            <Text key={pricing._id}>{`${pricing.price}`}</Text>
          ))}
        </MainLayout>
      )}
    </DataBoundary>
  );
};
