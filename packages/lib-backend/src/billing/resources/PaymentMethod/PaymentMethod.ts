import { withEntity } from '@lib/backend/resource/decorators/withEntity/withEntity';
import { EmbeddedResource } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResource';
import { PAYMENT_METHOD_RESOURCE_NAME } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import type { PaymentMethodModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';

@withEntity({ isEmbedded: true, name: PAYMENT_METHOD_RESOURCE_NAME })
export class PaymentMethod extends EmbeddedResource implements PaymentMethodModel {}
