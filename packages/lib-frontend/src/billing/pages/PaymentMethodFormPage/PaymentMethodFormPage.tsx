import { BILLING, PAYMENT_METHOD } from '@lib/frontend/billing/billing.constants';
import { PaymentMethodInput } from '@lib/frontend/billing/components/PaymentMethodInput/PaymentMethodInput';
import { type PaymentMethodInputRefModel } from '@lib/frontend/billing/components/PaymentMethodInput/PaymentMethodInput.models';
import { type PaymentMethodFormPagePropsModel } from '@lib/frontend/billing/pages/PaymentMethodFormPage/PaymentMethodFormPage.models';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { FormContainer } from '@lib/frontend/data/components/FormContainer/FormContainer';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import {
  PAYMENT_METHOD_MODE,
  PAYMENT_METHOD_RESOURCE_NAME,
} from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { ACCOUNT } from '@lib/shared/user/user.constants';
import { useRef } from 'react';

export const PaymentMethodFormPage: LFCModel<PaymentMethodFormPagePropsModel> = ({ ...props }) => {
  const { t } = useTranslation();
  const { wrapperProps } = useLayoutStyles({ props });
  const ref = useRef<PaymentMethodInputRefModel>(null);
  return (
    <FormContainer
      {...wrapperProps}
      fields={[
        {
          element: (
            <PaymentMethodInput
              mode={PAYMENT_METHOD_MODE.SETUP}
              ref={ref}
            />
          ),
          id: PAYMENT_METHOD_RESOURCE_NAME,
        },
      ]}
      isFullHeight
      onSubmit={async () => ref.current?.submit()}
      p
      redirectTo={{ pathname: `${ACCOUNT}/${BILLING}/${PAYMENT_METHOD}` }}
      successMessage={t()}
    />
  );
};
