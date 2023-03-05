import { withEntity } from '@lib/backend/resource/decorators/withEntity/withEntity';
import { withField } from '@lib/backend/resource/decorators/withField/withField';
import { EmbeddedResource } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResource';
import { PAYMENT_METHOD_RESOURCE_NAME } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import type {
  PaymentMethodModel,
  PaymentMethodType,
} from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { FIELD_TYPE } from '@lib/shared/form/form.constants';

@withEntity({ isEmbedded: true, name: PAYMENT_METHOD_RESOURCE_NAME })
export class PaymentMethod extends EmbeddedResource implements PaymentMethodModel {
  @withField()
  id!: string;

  @withField()
  last4!: string;

  @withField({ type: FIELD_TYPE.STRING })
  type!: PaymentMethodType;
}
