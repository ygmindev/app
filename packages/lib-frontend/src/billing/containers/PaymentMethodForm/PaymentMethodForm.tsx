import { BILLING, PAYMENT_METHOD } from '@lib/frontend/billing/billing.constants';
import { PaymentMethodInput } from '@lib/frontend/billing/components/PaymentMethodInput/PaymentMethodInput';
import { type PaymentMethodInputRefModel } from '@lib/frontend/billing/components/PaymentMethodInput/PaymentMethodInput.models';
import { type PaymentMethodFormPropsModel } from '@lib/frontend/billing/containers/PaymentMethodForm/PaymentMethodForm.models';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { FormContainer } from '@lib/frontend/data/components/FormContainer/FormContainer';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { PAYMENT_METHOD_RESOURCE_NAME } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { ACCOUNT } from '@lib/shared/user/user.constants';
import { useRef } from 'react';

export const PaymentMethodForm: LFCModel<PaymentMethodFormPropsModel> = ({ ...props }) => {
  const { t } = useTranslation([BILLING]);
  const ref = useRef<PaymentMethodInputRefModel>(null);
  return (
    <FormContainer
      {...props}
      fields={[
        {
          element: <PaymentMethodInput ref={ref} />,
          id: PAYMENT_METHOD_RESOURCE_NAME,
        },
      ]}
      isFullHeight
      onSubmit={async () => ref.current?.submit()}
      p
      redirectTo={{ pathname: `${ACCOUNT}/${BILLING}/${PAYMENT_METHOD}` }}
      successMessage={t('billing:paymentMethodSuccess')}
    />
  );
};
