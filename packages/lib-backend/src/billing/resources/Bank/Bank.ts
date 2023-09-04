import { EmbeddedResource } from '#lib-backend/resource/resources/EmbeddedResource/EmbeddedResource';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { BANK_RESOURCE_NAME } from '#lib-shared/billing/resources/Bank/Bank.constants';
import { type BankModel } from '#lib-shared/billing/resources/Bank/Bank.models';
import { PAYMENT_METHOD_TYPE } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { DATA_TYPE } from '#lib-shared/data/data.constants';

@withEntity({ isEmbedded: true, isRepository: true, name: BANK_RESOURCE_NAME })
export class Bank extends EmbeddedResource implements BankModel {
  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  bank!: string;

  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  id!: string;

  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  last4!: string;

  @withField({ type: DATA_TYPE.STRING })
  type!: PAYMENT_METHOD_TYPE.BANK;
}
