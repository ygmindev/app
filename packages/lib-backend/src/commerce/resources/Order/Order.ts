import { EntityResource } from '@lib/backend/resource/resources/EntityResource/EntityResource';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { ORDER_RESOURCE_NAME } from '@lib/shared/commerce/resources/Order/Order.constants';
import {
  type OrderFormModel,
  type OrderModel,
} from '@lib/shared/commerce/resources/Order/Order.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ isRepository: true, name: ORDER_RESOURCE_NAME })
export class Order extends EntityResource implements OrderModel {
  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  name!: string;
}

@withEntity({ name: `${ORDER_RESOURCE_NAME}Form` })
export class OrderForm implements OrderFormModel {}
