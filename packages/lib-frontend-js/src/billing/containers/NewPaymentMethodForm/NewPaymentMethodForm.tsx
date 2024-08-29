import { BILLING } from '@lib/frontend/billing/billing.constants';
import { NewPaymentMethodInput } from '@lib/frontend/billing/components/NewPaymentMethodInput/NewPaymentMethodInput';
import { type NewPaymentMethodInputRefModel } from '@lib/frontend/billing/components/NewPaymentMethodInput/NewPaymentMethodInput.models';
import { type NewPaymentMethodFormPropsModel } from '@lib/frontend/billing/containers/NewPaymentMethodForm/NewPaymentMethodForm.models';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { FormContainer } from '@lib/frontend/data/components/FormContainer/FormContainer';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { PAYMENT_METHOD_RESOURCE_NAME } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { useRef } from 'react';

export const NewPaymentMethodForm: LFCModel<NewPaymentMethodFormPropsModel> = ({ ...props }) => {
  const { t } = useTranslation([BILLING]);
  const ref = useRef<NewPaymentMethodInputRefModel>(null);
  return (
    <FormContainer
      {...props}
      fields={[{ element: <NewPaymentMethodInput ref={ref} />, id: PAYMENT_METHOD_RESOURCE_NAME }]}
      isFullHeight
      onSubmit={async () => (await ref.current?.submit()) || null}
      p
      successMessage={t('billing:paymentMethodSuccess')}
    />
  );
};
