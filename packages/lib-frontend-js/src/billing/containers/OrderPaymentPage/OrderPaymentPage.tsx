import { type OrderPaymentPagePropsModel } from '@lib/frontend/billing/containers/OrderPaymentPage/OrderPaymentPage.models';
import { PaymentMethodInput } from '@lib/frontend/billing/containers/PaymentMethodInput/PaymentMethodInput';
import { type PaymentMethodInputRefModel } from '@lib/frontend/billing/containers/PaymentMethodInput/PaymentMethodInput.models';
import { ORDER } from '@lib/frontend/commerce/commerce.constants';
import { useOrderResource } from '@lib/frontend/commerce/hooks/useOrderResource/useOrderResource';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { FormContainer } from '@lib/frontend/data/components/FormContainer/FormContainer';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type OrderFormModel } from '@lib/shared/commerce/resources/Order/Order.models';
import { SUCCESS } from '@lib/shared/core/core.constants';
import { type PickModel } from '@lib/shared/core/utils/pick/pick.models';
import { useRef } from 'react';

export const OrderPaymentPage: LFCModel<OrderPaymentPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const ref = useRef<PaymentMethodInputRefModel>(null);
  const [items, itemsSet] = useStore('commerce.items');
  const { create } = useOrderResource();
  const { replace } = useRouter();

  const handleSuccess = async (): Promise<void> => {
    itemsSet([]);
    void replace({ pathname: `/${ORDER}/${SUCCESS}` });
  };

  const handleSubmit = async (
    data: PickModel<OrderFormModel, 'paymentMethodId'>,
  ): Promise<void> => {
    await ref.current?.submit?.();
    await create({ form: { ...data, items } });
  };

  return (
    <FormContainer
      {...wrapperProps}
      fields={[
        {
          element: (
            <PaymentMethodInput
              products={items}
              ref={ref}
            />
          ),
          id: 'paymentMethodId',
        },
      ]}
      isFullHeight
      onSubmit={handleSubmit}
      onSuccess={handleSuccess}
      p
    />
  );
};
