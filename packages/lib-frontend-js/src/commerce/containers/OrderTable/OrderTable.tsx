import { type OrderTablePropsModel } from '@lib/frontend/commerce/containers/OrderTable/OrderTable.models';
import { useOrderResource } from '@lib/frontend/commerce/hooks/useOrderResource/useOrderResource';
import { ORDER_RESOURCE_PARAMS } from '@lib/frontend/commerce/resources/Order/Order.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { ResourceTable } from '@lib/frontend/resource/components/ResourceTable/ResourceTable';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import {
  type OrderFormModel,
  type OrderModel,
} from '@lib/shared/commerce/resources/Order/Order.models';

export const OrderTable: LFCModel<OrderTablePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const implementation = useOrderResource();
  return (
    <ResourceTable<OrderModel, OrderFormModel>
      {...wrapperProps}
      {...ORDER_RESOURCE_PARAMS}
      implementation={implementation}
    />
  );
};
