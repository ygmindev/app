import { Product } from '@lib/backend/commerce/resources/Product/Product';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { type PaymentArgsModel } from '@lib/shared/billing/utils/PaymentArgs/PaymentArgs.models';
import { type ProductArgsModel } from '@lib/shared/commerce/resources/Product/Product.models';
import { DATA_TYPE, PROPERTY_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ name: 'PaymentArgs' })
export class PaymentArgs implements PaymentArgsModel {
  @withField({
    Resource: () => Product,
    isArray: true,
    isOptional: true,
    type: PROPERTY_TYPE.RESOURCE,
  })
  products?: Array<ProductArgsModel>;

  @withField({ isOptional: true, type: DATA_TYPE.STRING })
  paymentMethodId?: string;
}
