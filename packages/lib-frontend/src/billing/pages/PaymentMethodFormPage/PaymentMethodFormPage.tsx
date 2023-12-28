import { useRef } from 'react';

import { PaymentMethodField } from '#lib-frontend/billing/components/PaymentMethodField/PaymentMethodField';
import { type PaymentMethodFieldRefModel } from '#lib-frontend/billing/components/PaymentMethodField/PaymentMethodField.models';
import { type PaymentMethodFormPagePropsModel } from '#lib-frontend/billing/pages/PaymentMethodFormPage/PaymentMethodFormPage.models';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { FormContainer } from '#lib-frontend/data/components/FormContainer/FormContainer';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { PAYMENT_METHOD_RESOURCE_NAME } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.constants';

export const PaymentMethodFormPage: LFCModel<PaymentMethodFormPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const ref = useRef<PaymentMethodFieldRefModel>(null);
  return (
    <FormContainer
      {...wrapperProps}
      fields={[
        {
          element: <PaymentMethodField ref={ref} />,
          id: PAYMENT_METHOD_RESOURCE_NAME,
        },
      ]}
      onSubmit={async () => {
        console.warn(ref.current?.submit);
        ref.current?.submit && ref.current?.submit();
      }}
      p
    />
  );
};
