import { BILLING } from '@lib/frontend/billing/billing.constants';
import { PaymentForm } from '@lib/frontend/billing/containers/PaymentForm/PaymentForm';
import { ORDER } from '@lib/frontend/commerce/commerce.constants';
import { PriceTile } from '@lib/frontend/commerce/components/PriceTile/PriceTile';
import { type OrderFormPropsModel } from '@lib/frontend/commerce/containers/OrderForm/OrderForm.models';
import { ProductItemForm } from '@lib/frontend/commerce/containers/ProductItemForm/ProductItemForm';
import { useOrderResource } from '@lib/frontend/commerce/hooks/useOrderResource/useOrderResource';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { StepForm } from '@lib/frontend/data/components/StepForm/StepForm';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FONT_STYLE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { COMMERCE } from '@lib/shared/commerce/commerce.constants';
import { type OrderFormModel } from '@lib/shared/commerce/resources/Order/Order.models';
import { getPrice } from '@lib/shared/commerce/utils/getPrice/getPrice';
import { SUCCESS } from '@lib/shared/core/core.constants';

export const OrderForm: LFCModel<OrderFormPropsModel> = ({ ...props }) => {
  const { t } = useTranslation([BILLING, COMMERCE]);
  const { wrapperProps } = useLayoutStyles({ props });
  const { create } = useOrderResource();
  const [items, itemsSet] = useStore('commerce.items');
  const price = getPrice(items);

  const handleSubmit = async (form: OrderFormModel): Promise<void> => {
    await create({ form });
  };

  const handleSuccess = async (): Promise<void> => {
    itemsSet([]);
  };

  return (
    <StepForm
      {...wrapperProps}
      elementState={items?.length ? undefined : ELEMENT_STATE.DISABLED}
      onSubmit={handleSubmit}
      onSuccess={handleSuccess}
      redirectTo={{ pathname: `/${ORDER}/${SUCCESS}` }}
      steps={[
        { element: <ProductItemForm />, id: 'item', title: t('commerce:item_plural') },
        { element: <PaymentForm />, id: 'payment', title: t('billing:payment') },
      ]}
      topElement={
        <Wrapper
          isAlign
          isCenter
          isRow>
          <Text fontStyle={FONT_STYLE.SUBTITLE}>{t('core:total')}</Text>

          <PriceTile price={price} />
        </Wrapper>
      }
    />
  );
};
