import { type PaymentMethodTablePropsModel } from '@lib/frontend/billing/containers/PaymentMethodTable/PaymentMethodTable.models';
import { usePaymentMethodResource } from '@lib/frontend/billing/hooks/usePaymentMethodResource/usePaymentMethodResource';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const PaymentMethodTable: LFCModel<PaymentMethodTablePropsModel> = ({ root, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const implementation = usePaymentMethodResource();
  return null;
  // return (
  //   <ResourceTable<PaymentMethodModel, UserModel>
  //     {...wrapperProps}
  //     {...PAYMENT_METHOD_RESOURCE_PARAMS}
  //     implementation={implementation}
  //   />
  // );
};
