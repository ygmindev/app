import { _PaymentMethodField } from '@lib/frontend/billing/components/PaymentMethodField/_PaymentMethodField';
import type { PaymentMethodFieldPropsModel } from '@lib/frontend/billing/components/PaymentMethodField/PaymentMethodField.models';
import { useBankResource } from '@lib/frontend/billing/hooks/useBankResource/useBankResource';
import { useCardResource } from '@lib/frontend/billing/hooks/useCardResource/useCardResource';
import type { RSFCModel } from '@lib/frontend/core/core.models';
import type { FormRefModel } from '@lib/frontend/form/form.models';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import type { PaymentMethodFormModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { forwardRef } from 'react';

export const PaymentMethodField: RSFCModel<
  FormRefModel<PaymentMethodFormModel>,
  PaymentMethodFieldPropsModel
> = forwardRef(({ ...props }, ref) => {
  const currentUser = useCurrentUser();
  const { create: createBank } = useBankResource({ root: { _id: currentUser?._id } });
  const { create: createCard } = useCardResource({ root: { _id: currentUser?._id } });
  return currentUser ? (
    <_PaymentMethodField
      {...props}
      onBankCreate={async (form) => {
        await createBank({ form });
      }}
      onCardCreate={async (form) => {
        await createCard({ form });
      }}
      ref={ref}
    />
  ) : null;
});
