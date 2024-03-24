import { BILLING } from '@lib/frontend/billing/billing.constants';
import { PaymentForm } from '@lib/frontend/billing/containers/PaymentForm/PaymentForm';
import { Price } from '@lib/frontend/commerce/components/Price/Price';
import { type OrderFormPropsModel } from '@lib/frontend/commerce/containers/OrderForm/OrderForm.models';
import { ProductForm } from '@lib/frontend/commerce/containers/ProductForm/ProductForm';
import { useOrderResource } from '@lib/frontend/commerce/hooks/useOrderResource/useOrderResource';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { StepForm } from '@lib/frontend/data/components/StepForm/StepForm';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FONT_STYLE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { COMMERCE } from '@lib/shared/commerce/commerce.constants';
import { type OrderFormModel } from '@lib/shared/commerce/resources/Order/Order.models';
import { getPrice } from '@lib/shared/commerce/utils/getPrice/getPrice';

export const OrderForm: LFCModel<OrderFormPropsModel> = ({ ...props }) => {
  const { t } = useTranslation([BILLING, COMMERCE]);
  const { wrapperProps } = useLayoutStyles({ props });
  const { create } = useOrderResource();
  const [products, productsSet] = useStore('commerce.products');
  const price = getPrice(products);

  const handleSubmit = async (form: OrderFormModel): Promise<void> => {
    await create({ form });
  };

  const handleSuccess = async (): Promise<void> => {
    productsSet([]);
  };

  return (
    <StepForm
      {...wrapperProps}
      onSubmit={handleSubmit}
      onSuccess={handleSuccess}
      redirectTo={{ pathname: '/' }}
      steps={[
        { element: <ProductForm />, id: 'product', title: t('commerce:product_plural') },
        { element: <PaymentForm />, id: 'payment', title: t('billing:payment') },
      ]}
      topElement={
        <Wrapper
          isAlign
          isCenter
          isRow>
          <Text fontStyle={FONT_STYLE.SUBTITLE}>{t('core:total')}</Text>

          <Price price={price} />
        </Wrapper>
      }
    />
  );
};
