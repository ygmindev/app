import { _PaymentMethodField } from '@lib/frontend/billing/components/PaymentMethodField/_PaymentMethodField';
import {
  type PaymentMethodFieldPropsModel,
  type PaymentMethodFieldRefModel,
} from '@lib/frontend/billing/components/PaymentMethodField/PaymentMethodField.models';
import { usePaymentMethodResource } from '@lib/frontend/billing/hooks/usePaymentMethodResource/usePaymentMethodResource';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import { useErrorContext } from '@lib/frontend/core/hooks/useErrorContext/useErrorContext';
import { DataBoundary } from '@lib/frontend/data/components/DataBoundary/DataBoundary';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import { type PaymentMethodModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { forwardRef } from 'react';

export const PaymentMethodField: RLFCModel<
  PaymentMethodFieldRefModel,
  PaymentMethodFieldPropsModel
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
        <_PaymentMethodField
          {...props}
          onError={handleError}
          ref={ref}
          token={data?.token}
        />
      )}
    </DataBoundary>
  );
});
