import { CartItem } from '@lib/backend/commerce/utils/CartItem/CartItem';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { type PaymentArgsModel } from '@lib/shared/billing/utils/PaymentArgs/PaymentArgs.models';
import { type CartItemModel } from '@lib/shared/commerce/utils/CartItem/CartItem.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ name: 'PaymentArgs' })
export class PaymentArgs implements PaymentArgsModel {
  @withField({ Resource: () => CartItem, isArray: true, isOptional: true, type: DATA_TYPE.STRING })
  items?: Array<CartItemModel>;

  @withField({ isOptional: true, type: DATA_TYPE.STRING })
  paymentMethodId?: string;
}
