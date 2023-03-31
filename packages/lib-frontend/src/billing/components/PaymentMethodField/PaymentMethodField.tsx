import { _PaymentMethodField } from '@lib/frontend/billing/components/PaymentMethodField/_PaymentMethodField';
import type { PaymentMethodFieldPropsModel } from '@lib/frontend/billing/components/PaymentMethodField/PaymentMethodField.models';
import { useBankResource } from '@lib/frontend/billing/hooks/useBankResource/useBankResource';
import { useCardResource } from '@lib/frontend/billing/hooks/useCardResource/useCardResource';
import type { RSFCModel } from '@lib/frontend/core/core.models';
import type { FormRefModel } from '@lib/frontend/form/form.models';
import { useActions } from '@lib/frontend/state/hooks/useActions/useActions';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import type { BankFormModel } from '@lib/shared/billing/resources/Bank/Bank.models';
import type { CardFormModel } from '@lib/shared/billing/resources/Card/Card.models';
import { PAYMENT_METHOD_TYPE } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import type { PaymentMethodModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import type { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import type { OutputModel } from '@lib/shared/resource/utils/Output/Output.models';
import type { UserModel } from '@lib/shared/user/resources/User/User.models';
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
        onSubmit={async (form) => {
          const _onSubmit = (): Promise<
            OutputModel<RESOURCE_METHOD_TYPE.CREATE, PaymentMethodModel, UserModel>
          > | void => {
            switch (form.type) {
              case PAYMENT_METHOD_TYPE.BANK:
                return createBank({ form: form as BankFormModel });
              case PAYMENT_METHOD_TYPE.CARD:
                return createCard({ form: form as CardFormModel });
              default:
                return undefined;
            }
          };
          const result = await _onSubmit();
          result && actions?.billing.paymentMethodAdd(result.result);
        }}
        ref={ref}
      />
    ) : null;
  },
);
