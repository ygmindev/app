import { _NewPaymentMethodInput } from '@lib/frontend/billing/components/NewPaymentMethodInput/_NewPaymentMethodInput';
import {
  type NewPaymentMethodInputPropsModel,
  type NewPaymentMethodInputRefModel,
} from '@lib/frontend/billing/components/NewPaymentMethodInput/NewPaymentMethodInput.models';
import { useBankResource } from '@lib/frontend/billing/hooks/useBankResource/useBankResource';
import { useCardResource } from '@lib/frontend/billing/hooks/useCardResource/useCardResource';
import { usePaymentMethodResource } from '@lib/frontend/billing/hooks/usePaymentMethodResource/usePaymentMethodResource';
import { REDIRECT } from '@lib/frontend/core/core.constants';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import { DataBoundary } from '@lib/frontend/data/components/DataBoundary/DataBoundary';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import { PAYMENT_METHOD_TYPE } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { type PaymentMethodFormModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { APP_URI } from '@lib/shared/http/http.constants';
import { forwardRef } from 'react';

export const NewPaymentMethodInput: RLFCModel<
  NewPaymentMethodInputRefModel,
  NewPaymentMethodInputPropsModel
> = forwardRef(({ items, price, redirectTo = `${APP_URI}/${REDIRECT}`, ...props }, ref) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { createToken } = usePaymentMethodResource();

  const currentUser = useCurrentUser();
  const { create: bankCreate } = useBankResource({ root: currentUser?._id });
  const { create: cardCreate } = useCardResource({ root: currentUser?._id });
  const [paymentMethods, paymentMethodsSet] = useStore('billing.PaymentMethod');

  const handleCreate = async (form: PaymentMethodFormModel): Promise<void> => {
    if (form) {
      const paymentMethod = await (async () => {
        switch (form.type) {
          case PAYMENT_METHOD_TYPE.BANK:
            return (await bankCreate({ form })).result;
          case PAYMENT_METHOD_TYPE.CARD:
            return (await cardCreate({ form })).result;
        }
      })();
      paymentMethod && paymentMethodsSet([...(paymentMethods ?? []), paymentMethod]);
    }
  };

  return (
    <DataBoundary
      {...wrapperProps}
      flex
      id="paymentMethodToken"
      query={async () => (await createToken({ form: {}, root: currentUser?._id })).result}>
      {({ data }) =>
        data && (
          <_NewPaymentMethodInput
            items={items}
            onCreate={handleCreate}
            price={price}
            redirectTo={redirectTo}
            ref={ref}
            token={data}
          />
        )
      }
    </DataBoundary>
  );
});
