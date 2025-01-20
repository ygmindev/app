import { type OrderPaymentPagePropsModel } from '@lib/frontend/billing/containers/OrderPaymentPage/OrderPaymentPage.models';
import { PaymentMethodInput } from '@lib/frontend/billing/containers/PaymentMethodInput/PaymentMethodInput';
import { type PaymentMethodInputRefModel } from '@lib/frontend/billing/containers/PaymentMethodInput/PaymentMethodInput.models';
import { ORDER } from '@lib/frontend/commerce/commerce.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { FormContainer } from '@lib/frontend/data/components/FormContainer/FormContainer';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { SUCCESS } from '@lib/shared/core/core.constants';
import { useRef } from 'react';

export const OrderPaymentPage: LFCModel<OrderPaymentPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const ref = useRef<PaymentMethodInputRefModel>(null);
  const [items] = useStore('commerce.items');
  const { push } = useRouter();

  // const { create } = useOrderResource();
  // const [items, itemsSet] = useStore('commerce.items');
  // const { replace } = useRouter();

  // const handleSubmit = async (form: OrderFormModel): Promise<void> => {
  //   await create({ form });
  // };

  // const handleSuccess = async (): Promise<void> => {
  //   itemsSet([]);
  //   void replace({ pathname: `/${ORDER}/${SUCCESS}` });
  // };

  const handleSubmit = async (data: unknown): Promise<void> => {
    ref.current?.submit && (await ref.current.submit());
    console.warn(data);
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
      onSubmit={handleSubmit}
      onSuccess={async () => push({ pathname: `${ORDER}/${SUCCESS}` })}
      p
    />
  );
};
