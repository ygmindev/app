import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { PAYMENT_METHOD_RESOURCE_NAME } from '@lib/model/billing/PaymentMethod/PaymentMethod.constants';
import {
  PAYMENT_METHOD_TYPE,
  PaymentMethodModel,
} from '@lib/model/billing/PaymentMethod/PaymentMethod.models';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';

@withEntity({ name: PAYMENT_METHOD_RESOURCE_NAME })
export class PaymentMethod extends EntityResource implements PaymentMethodModel {
  @withField({ isOptional: true })
  brand?: string;

  @withField()
  externalId!: string;

  @withField()
  fingerprint!: string;

  @withField()
  last4!: string;

  @withField({ isOptional: true })
  name?: string;

  @withField()
  type!: PAYMENT_METHOD_TYPE;
}
