import { BILLING } from '@lib/frontend/billing/billing.constants';
import { _NewPaymentMethodInput } from '@lib/frontend/billing/components/NewPaymentMethodInput/_NewPaymentMethodInput';
import {
  type NewPaymentMethodInputPropsModel,
  type NewPaymentMethodInputRefModel,
} from '@lib/frontend/billing/components/NewPaymentMethodInput/NewPaymentMethodInput.models';
import { useBankResource } from '@lib/frontend/billing/hooks/useBankResource/useBankResource';
import { useCardResource } from '@lib/frontend/billing/hooks/useCardResource/useCardResource';
import { usePaymentMethodResource } from '@lib/frontend/billing/hooks/usePaymentMethodResource/usePaymentMethodResource';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { REDIRECT } from '@lib/frontend/core/core.constants';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import { useUnmount } from '@lib/frontend/core/hooks/useUnmount/useUnmount';
import { DataBoundary } from '@lib/frontend/data/components/DataBoundary/DataBoundary';
import { SwitchInput } from '@lib/frontend/data/components/SwitchInput/SwitchInput';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useActions } from '@lib/frontend/state/hooks/useActions/useActions';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import { PAYMENT_METHOD_TYPE } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { type PaymentMethodModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { type NilModel, type PartialModel } from '@lib/shared/core/core.models';
import { APP_URI } from '@lib/shared/http/http.constants';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { forwardRef, useState } from 'react';

export const NewPaymentMethodInput: RLFCModel<
  NewPaymentMethodInputRefModel,
  NewPaymentMethodInputPropsModel
> = forwardRef(({ redirectTo = `${APP_URI}/${REDIRECT}`, ...props }, ref) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const [currentToken, currentTokenSet] = useState<string>();
  const { createToken, removeToken } = usePaymentMethodResource();
  const { t } = useTranslation([BILLING]);

  const currentUser = useCurrentUser();
  const { create: bankCreate } = useBankResource({ root: currentUser?._id });
  const { create: cardCreate } = useCardResource({ root: currentUser?._id });
  const actions = useActions();

  const [isPrimary, isPrimarySet] = useState<boolean>(true);

  useUnmount(() => {
    currentToken && void removeToken({ id: currentToken });
  });

  const handleCreate = async ({
    type,
    ...form
  }: EntityResourceDataModel<PaymentMethodModel>): Promise<
    PartialModel<PaymentMethodModel> | NilModel
  > => {
    const formF = isPrimary ? { ...form, isPrimary: true } : form;
    const paymentMethod = await (async () => {
      switch (type) {
        case PAYMENT_METHOD_TYPE.BANK:
          return (await bankCreate({ form: formF })).result;
        case PAYMENT_METHOD_TYPE.CARD:
          return (await cardCreate({ form: formF })).result;
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
        const token = await createToken({});
        token && currentTokenSet(token);
        return token;
      }}>
      {({ data }) =>
        data && (
          <Wrapper s>
            <SwitchInput
              label={t('billing:setAsDefault')}
              onChange={isPrimarySet}
              value={isPrimary}
            />

            <_NewPaymentMethodInput
              onCreate={handleCreate}
              redirectTo={redirectTo}
              ref={ref}
              token={data}
            />
          </Wrapper>
        )
      }
    </DataBoundary>
  );
});
