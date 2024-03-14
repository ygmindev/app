import { PRODUCT } from '@lib/frontend/commerce/commerce.constants';
import { useProductResource } from '@lib/frontend/commerce/hooks/useProductResource/useProductResource';
import {
  type ProductPageParamsModle,
  type ProductPagePropsModel,
} from '@lib/frontend/commerce/pages/ProductPage/ProductPage.models';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { DataBoundary } from '@lib/frontend/data/components/DataBoundary/DataBoundary';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useActions } from '@lib/frontend/state/hooks/useActions/useActions';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { PRICING_RESOURCE_NAME } from '@lib/shared/commerce/resources/Pricing/Pricing.constants';

export const ProductPage: LFCModel<ProductPagePropsModel> = ({ ...props }) => {
  const { t } = useTranslation();
  const { wrapperProps } = useLayoutStyles({ props });
  const { location } = useRouter<ProductPageParamsModle>();
  const { get } = useProductResource();
  const actions = useActions();
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
            data?.result && (
              <Button
                icon="add"
                onPress={() => actions?.commerce.productsAdd(data.result)}>
                {t('commerce:addToCart')}
              </Button>
            )
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
