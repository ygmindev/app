import { ProductItem } from '@lib/backend/commerce/utils/ProductItem/ProductItem';
import { withDatabaseEntity } from '@lib/backend/resource/utils/withDatabaseEntity/withDatabaseEntity';
import { withDatabaseField } from '@lib/backend/resource/utils/withDatabaseField/withDatabaseField';
import { ORDER_RESOURCE_NAME, ORDER_STATUS } from '@lib/model/commerce/Order/Order.constants';
import { type OrderModel } from '@lib/model/commerce/Order/Order.models';
import { type ProductItemModel } from '@lib/model/commerce/ProductItem/ProductItem.models';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
import { PartialArrayModel } from '@lib/shared/core/core.models';

@withDatabaseEntity({ name: ORDER_RESOURCE_NAME })
export class Order extends EntityResource implements OrderModel {
  @withDatabaseField({
    Resource: () => ProductItem,
    isOptional: true,
  })
  items?: PartialArrayModel<ProductItemModel>;

  @withDatabaseField({ isOptional: true })
  paymentMethodId?: string;

  @withDatabaseField({ isOptional: true })
  status?: ORDER_STATUS;
}

export default Order;
