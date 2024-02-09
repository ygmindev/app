import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { type PaymentArgsModel } from '@lib/shared/billing/utils/PaymentArgs/PaymentArgs.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ name: 'PaymentArgs' })
export class PaymentArgs implements PaymentArgsModel {
  @withField({ isArray: true, isOptional: true, type: DATA_TYPE.STRING })
  items?: Array<string>;

  @withField({ isOptional: true, type: DATA_TYPE.STRING })
  paymentMethodId?: string;
}
