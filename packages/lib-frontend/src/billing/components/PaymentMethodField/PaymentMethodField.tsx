import { forwardRef } from 'react';

import { _PaymentMethodField } from '#lib-frontend/billing/components/PaymentMethodField/_PaymentMethodField';
import { type PaymentMethodFieldPropsModel } from '#lib-frontend/billing/components/PaymentMethodField/PaymentMethodField.models';
import { useBankResource } from '#lib-frontend/billing/hooks/useBankResource/useBankResource';
import { useCardResource } from '#lib-frontend/billing/hooks/useCardResource/useCardResource';
import { type RSFCModel } from '#lib-frontend/core/core.models';
import { type FormRefModel } from '#lib-frontend/data/data.models';
import { useActions } from '#lib-frontend/state/hooks/useActions/useActions';
import { useCurrentUser } from '#lib-frontend/user/hooks/useCurrentUser/useCurrentUser';
import { PAYMENT_METHOD_TYPE } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { type PaymentMethodModel } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { type RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { type OutputModel } from '#lib-shared/resource/utils/Output/Output.models';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

export const PaymentMethodField: RSFCModel<FormRefModel, PaymentMethodFieldPropsModel> = forwardRef(
  ({ defaultValue, ...props }, ref) => {
    const actions = useActions();
    const currentUser = useCurrentUser();
    const { create: createBank, update: updateBank } = useBankResource({
      root: { _id: currentUser?._id },
    });
    const { create: createCard, update: updateCard } = useCardResource({
      root: { _id: currentUser?._id },
    });
    return currentUser ? (
      <_PaymentMethodField
        {...props}
        defaultValue={defaultValue}
        onSubmit={async (form) => {
          const onSubmit = (): Promise<
            OutputModel<
              RESOURCE_METHOD_TYPE.CREATE | RESOURCE_METHOD_TYPE.UPDATE,
              PaymentMethodModel,
              UserModel
            >
          > | void => {
            switch (form?.type) {
              case PAYMENT_METHOD_TYPE.BANK:
                return defaultValue
                  ? updateBank({
                      filter: [{ field: '_id', value: defaultValue._id }],
                      update: form,
                    })
                  : createBank({ form });
              case PAYMENT_METHOD_TYPE.CARD:
                return defaultValue
                  ? updateCard({
                      filter: [{ field: '_id', value: defaultValue._id }],
                      update: form,
                    })
                  : createCard({ form });
              default:
                return undefined;
            }
          };
          const result = await onSubmit();
          result &&
            (defaultValue
              ? actions?.billing.paymentMethodUpdate(result.result)
              : actions?.billing.paymentMethodAdd(result.result));
        }}
        ref={ref}
      />
    ) : null;
  },
);
