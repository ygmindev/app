import { type OrderFormPropsModel } from '@lib/frontend/commerce/containers/OrderForm/OrderForm.models';
import { ProductForm } from '@lib/frontend/commerce/containers/ProductForm/ProductForm';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { StepForm } from '@lib/frontend/data/components/StepForm/StepForm';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { COMMERCE } from '@lib/shared/commerce/commerce.constants';

export const OrderForm: LFCModel<OrderFormPropsModel> = ({ ...props }) => {
  const { t } = useTranslation([COMMERCE]);
  const { wrapperProps } = useLayoutStyles({ props });

  const handleSubmit = async (data: unknown): Promise<void> => {
    console.warn(data);
  };

  return (
    <StepForm
      {...wrapperProps}
      onSubmit={handleSubmit}
      steps={[{ element: <ProductForm />, id: 'product', title: t('commerce:product_plural') }]}
    />
  );
};
