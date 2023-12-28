import { forwardRef } from 'react';

import { _PaymentMethodField } from '#lib-frontend/billing/components/PaymentMethodField/_PaymentMethodField';
import {
  type PaymentMethodFieldPropsModel,
  type PaymentMethodFieldRefModel,
} from '#lib-frontend/billing/components/PaymentMethodField/PaymentMethodField.models';
import { usePaymentMethodResource } from '#lib-frontend/billing/hooks/usePaymentMethodResource/usePaymentMethodResource';
import { type RLFCModel } from '#lib-frontend/core/core.models';
import { DataBoundary } from '#lib-frontend/data/components/DataBoundary/DataBoundary';
import { useCurrentUser } from '#lib-frontend/user/hooks/useCurrentUser/useCurrentUser';

export const PaymentMethodField: RLFCModel<
  PaymentMethodFieldRefModel,
  PaymentMethodFieldPropsModel
> = forwardRef(({ defaultValue, ...props }, ref) => {
  const currentUser = useCurrentUser();
  const { createToken } = usePaymentMethodResource();
  return (
    <DataBoundary
      id="cardToken"
      query={async () => createToken({ root: currentUser?._id })}>
      {({ data }) => (
        <_PaymentMethodField
          {...props}
          defaultValue={defaultValue}
          ref={ref}
          token={data?.result}
        />
      )}
    </DataBoundary>
  );
});
