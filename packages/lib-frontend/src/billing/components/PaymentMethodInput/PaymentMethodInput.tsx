import { _PaymentMethodInput } from '@lib/frontend/billing/components/PaymentMethodInput/_PaymentMethodInput';
import {
  type PaymentMethodInputPropsModel,
  type PaymentMethodInputRefModel,
} from '@lib/frontend/billing/components/PaymentMethodInput/PaymentMethodInput.models';
import { usePaymentMethodResource } from '@lib/frontend/billing/hooks/usePaymentMethodResource/usePaymentMethodResource';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import { useErrorContext } from '@lib/frontend/core/hooks/useErrorContext/useErrorContext';
import { DataBoundary } from '@lib/frontend/data/components/DataBoundary/DataBoundary';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import { type PaymentMethodModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { forwardRef } from 'react';

export const PaymentMethodInput: RLFCModel<
  PaymentMethodInputRefModel,
  PaymentMethodInputPropsModel
> = forwardRef(({ ...props }, ref) => {
  const currentUser = useCurrentUser();
  const { createToken } = usePaymentMethodResource();
  const { handleError } = useErrorContext();

  const query = async (): Promise<{ data?: PaymentMethodModel; token?: string }> => ({
    token: (await createToken({ root: currentUser?._id })).result,
  });

  return (
    <DataBoundary
      flex
      id="cardToken"
      query={query}>
      {({ data }) => (
        <_PaymentMethodInput
          {...props}
          onError={handleError}
          ref={ref}
          token={data?.token}
        />
      )}
    </DataBoundary>
  );
});
