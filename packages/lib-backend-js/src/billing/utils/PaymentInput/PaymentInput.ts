import { ProductItem } from '@lib/backend/commerce/utils/ProductItem/ProductItem';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { type ProductItemModel } from '@lib/model/commerce/ProductItem/ProductItem.models';
import { PAYMENT_INPUT } from '@lib/shared/billing/utils/PaymentInput/PaymentInput.constants';
import { type PaymentInputModel } from '@lib/shared/billing/utils/PaymentInput/PaymentInput.models';
import { PartialArrayModel } from '@lib/shared/core/core.models';

@withEntity({ name: PAYMENT_INPUT })
export class PaymentInput implements PaymentInputModel {
  @withField({ isOptional: true })
  paymentMethodId?: string;

  @withField({ Resource: () => ProductItem, isArray: true, isOptional: true })
  products?: PartialArrayModel<ProductItemModel>;
}
