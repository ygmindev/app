import { type PaymentMethodTablePropsModel } from '@lib/frontend/billing/containers/PaymentMethodTable/PaymentMethodTable.models';
import { usePaymentMethodResource } from '@lib/frontend/billing/hooks/usePaymentMethodResource/usePaymentMethodResource';
import { PAYMENT_METHOD_RESOURCE_PARAMS } from '@lib/frontend/billing/resources/PaymentMethod/PaymentMethod.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { ResourceTable } from '@lib/frontend/resource/components/ResourceTable/ResourceTable';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import {
  type PaymentMethodFormModel,
  type PaymentMethodModel,
} from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export const PaymentMethodTable: LFCModel<PaymentMethodTablePropsModel> = ({ root, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const implementation = usePaymentMethodResource({ root });
  return (
    <ResourceTable<PaymentMethodModel, PaymentMethodFormModel, UserModel>
      {...wrapperProps}
      {...PAYMENT_METHOD_RESOURCE_PARAMS}
      implementation={implementation}
    />
  );
};
