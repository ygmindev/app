import { _PaymentMethodField } from '@lib/frontend/billing/components/PaymentMethodField/_PaymentMethodField';
import type { PaymentMethodFieldPropsModel } from '@lib/frontend/billing/components/PaymentMethodField/PaymentMethodField.models';
import { useBankResource } from '@lib/frontend/billing/hooks/useBankResource/useBankResource';
import { useCardResource } from '@lib/frontend/billing/hooks/useCardResource/useCardResource';
import type { RSFCModel } from '@lib/frontend/core/core.models';
import type { FormRefModel } from '@lib/frontend/form/form.models';
import { useActions } from '@lib/frontend/state/hooks/useActions/useActions';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import { PAYMENT_METHOD_TYPE } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { forwardRef } from 'react';

export const PaymentMethodField: RSFCModel<FormRefModel, PaymentMethodFieldPropsModel> = forwardRef(
  ({ ...props }, ref) => {
    const actions = useActions();
    const currentUser = useCurrentUser();
    const { create: createBank } = useBankResource({ root: { _id: currentUser?._id } });
    const { create: createCard } = useCardResource({ root: { _id: currentUser?._id } });
    return currentUser ? (
      <_PaymentMethodField
        {...props}
        onBankCreate={async (form) => {
          const { result } = await createBank({ form });
          result &&
            actions?.billing.paymentMethodAdd({
              _id: result._id,
              last4: result.last4,
              type: PAYMENT_METHOD_TYPE.BANK,
            });
        }}
        onCardCreate={async (form) => {
          const { result } = await createCard({ form });
          result &&
            actions?.billing.paymentMethodAdd({
              _id: result._id,
              last4: result.last4,
              type: PAYMENT_METHOD_TYPE.CARD,
            });
        }}
        ref={ref}
      />
    ) : null;
  },
);
