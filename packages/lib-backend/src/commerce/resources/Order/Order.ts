import { ProductItem } from '@lib/backend/commerce/utils/ProductItem/ProductItem';
import { EntityResource } from '@lib/backend/resource/resources/EntityResource/EntityResource';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { ORDER_RESOURCE_NAME } from '@lib/shared/commerce/resources/Order/Order.constants';
import { type OrderModel } from '@lib/shared/commerce/resources/Order/Order.models';
import { type ProductItemModel } from '@lib/shared/commerce/utils/ProductItem/ProductItem.models';
import { type PartialModel } from '@lib/shared/core/core.models';
import { DATA_TYPE, PROPERTY_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ isRepository: true, name: ORDER_RESOURCE_NAME })
export class Order extends EntityResource implements OrderModel {
  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  paymentMethodId?: string;

  @withField({
    Resource: () => ProductItem,
    isArray: true,
    isOptional: true,
    isRepository: true,
    type: PROPERTY_TYPE.RESOURCE,
  })
  products?: Array<PartialModel<ProductItemModel>>;
}
