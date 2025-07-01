import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { PAYMENT_METHOD_RESOURCE_NAME } from '@lib/model/billing/PaymentMethod/PaymentMethod.constants';
import {
  PAYMENT_METHOD_TYPE,
  PaymentMethodModel,
} from '@lib/model/billing/PaymentMethod/PaymentMethod.models';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
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
  type!: PAYMENT_METHOD_TYPEg;
}
