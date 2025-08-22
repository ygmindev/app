import { ProductItem } from '@lib/backend/commerce/utils/ProductItem/ProductItem';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { ORDER_RESOURCE_NAME, ORDER_STATUS } from '@lib/model/commerce/Order/Order.constants';
import { type OrderModel } from '@lib/model/commerce/Order/Order.models';
import { type ProductItemModel } from '@lib/model/commerce/ProductItem/ProductItem.models';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
import { PartialArrayModel } from '@lib/shared/core/core.models';

@withEntity({ isDatabase: true, name: ORDER_RESOURCE_NAME })
export class Order extends EntityResource implements OrderModel {
  @withField({
    Resource: () => ProductItem,
    isDatabase: true,
    isOptional: true,
  })
  items?: PartialArrayModel<ProductItemModel>;

  @withField({ isDatabase: true, isOptional: true })
  paymentMethodId?: string;

  @withField({ isDatabase: true, isOptional: true })
  status?: ORDER_STATUS;
}

export default Order;
