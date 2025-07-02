import { ProductItem } from '@lib/backend/commerce/utils/ProductItem/ProductItem';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { ORDER_RESOURCE_NAME, ORDER_STATUS } from '@lib/model/commerce/Order/Order.constants';
import { type OrderModel } from '@lib/model/commerce/Order/Order.models';
import { type ProductItemModel } from '@lib/model/commerce/ProductItem/ProductItem.models';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
import { DATA_TYPE, PROPERTY_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ isDatabase: true, name: ORDER_RESOURCE_NAME })
export class Order extends EntityResource implements OrderModel {
  @withField({
    Resource: () => ProductItem,
    isArray: true,
    isDatabase: true,
    isOptional: true,
    type: PROPERTY_TYPE.RESOURCE,
  })
  items?: Array<ProductItemModel>;

  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.STRING })
  paymentMethodId?: string;

  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.STRING })
  status?: ORDER_STATUS;
}
