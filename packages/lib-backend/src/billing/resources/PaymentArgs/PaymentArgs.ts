import { Product } from '@lib/backend/commerce/resources/Product/Product';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { type PaymentArgsModel } from '@lib/shared/billing/utils/PaymentArgs/PaymentArgs.models';
import { type ProductSummaryModel } from '@lib/shared/commerce/resources/Product/Product.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ name: 'PaymentArgs' })
export class PaymentArgs implements PaymentArgsModel {
  @withField({ Resource: () => Product, isArray: true, isOptional: true, type: DATA_TYPE.STRING })
  products?: Array<ProductSummaryModel>;

  @withField({ isOptional: true, type: DATA_TYPE.STRING })
  paymentMethodId?: string;
}
