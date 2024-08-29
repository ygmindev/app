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
import { useUnmount } from '@lib/frontend/core/hooks/useUnmount/useUnmount';
import { DataBoundary } from '@lib/frontend/data/components/DataBoundary/DataBoundary';
import { useActions } from '@lib/frontend/state/hooks/useActions/useActions';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import { PAYMENT_METHOD_TYPE } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import {
  type PaymentMethodFormModel,
  type PaymentMethodModel,
} from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { type NilModel, type PartialModel } from '@lib/shared/core/core.models';
import { APP_URI } from '@lib/shared/http/http.constants';
import { forwardRef, useState } from 'react';

export const NewPaymentMethodInput: RLFCModel<
  NewPaymentMethodInputRefModel,
  NewPaymentMethodInputPropsModel
> = forwardRef(({ products, redirectTo = `${APP_URI}/${REDIRECT}`, ...props }, ref) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const [currentToken, currentTokenSet] = useState<string>();
  const { createToken, removeToken } = usePaymentMethodResource();

  const currentUser = useCurrentUser();
  const { create: bankCreate } = useBankResource({ root: currentUser?._id });
  const { create: cardCreate } = useCardResource({ root: currentUser?._id });
  const actions = useActions();

  useUnmount(() => {
    currentToken && void removeToken({ filter: [{ field: 'id', value: currentToken }] });
  });

  const handleCreate = async ({
    type,
    ...form
  }: PaymentMethodFormModel): Promise<PartialModel<PaymentMethodModel> | NilModel> => {
    const paymentMethod = await (async () => {
      switch (type) {
        case PAYMENT_METHOD_TYPE.BANK:
          return (await bankCreate({ form })).result;
        case PAYMENT_METHOD_TYPE.CARD:
          return (await cardCreate({ form })).result;
      }
    })();
    paymentMethod && actions?.billing.paymentMethodsAdd(paymentMethod);
    return paymentMethod;
  };

  return (
    <DataBoundary
      {...wrapperProps}
      flex
      id="paymentMethodToken"
      query={async () => {
        const token = (await createToken({ form: { products }, root: currentUser?._id })).result;
        token && currentTokenSet(token);
        return token;
      }}>
      {({ data }) =>
        data && (
          <_NewPaymentMethodInput
            onCreate={handleCreate}
            products={products}
            redirectTo={redirectTo}
            ref={ref}
            token={data}
          />
        )
      }
    </DataBoundary>
  );
});
