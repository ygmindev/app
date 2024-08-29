import { ProductItem } from '@lib/backend/commerce/utils/ProductItem/ProductItem';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { type PaymentArgsModel } from '@lib/shared/billing/utils/PaymentArgs/PaymentArgs.models';
import { type ProductItemModel } from '@lib/shared/commerce/utils/ProductItem/ProductItem.models';
import { type PartialModel } from '@lib/shared/core/core.models';
import { DATA_TYPE, PROPERTY_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ name: 'PaymentArgs' })
export class PaymentArgs implements PaymentArgsModel {
  @withField({
    Resource: () => ProductItem,
    isArray: true,
    isOptional: true,
    type: PROPERTY_TYPE.RESOURCE,
  })
  products?: Array<PartialModel<ProductItemModel>>;

  @withField({ isOptional: true, type: DATA_TYPE.STRING })
  paymentMethodId?: string;
}
