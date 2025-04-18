import { EntityResource } from '@lib/backend/resource/resources/EntityResource/EntityResource';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { PAYMENT_METHOD_RESOURCE_NAME } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import {
  PaymentMethodModel,
  type PaymentMethodTypeModel,
} from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ name: PAYMENT_METHOD_RESOURCE_NAME })
export class PaymentMethod extends EntityResource implements PaymentMethodModel {
  @withField({ type: DATA_TYPE.STRING })
  externalId!: string;

  @withField({ type: DATA_TYPE.STRING })
  fingerprint!: string;

  @withField({ type: DATA_TYPE.STRING })
  last4!: string;

  @withField({ type: DATA_TYPE.STRING })
  name!: string;

  @withField({ type: DATA_TYPE.STRING })
  type!: PaymentMethodTypeModel;
}
