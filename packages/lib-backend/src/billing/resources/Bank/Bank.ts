import { withEntity } from '#lib-backend/resource/decorators/withEntity/withEntity';
import { withField } from '#lib-backend/resource/decorators/withField/withField';
import { EmbeddedResource } from '#lib-backend/resource/resources/EmbeddedResource/EmbeddedResource';
import { BANK_RESOURCE_NAME } from '#lib-shared/billing/resources/Bank/Bank.constants';
import type { BankModel } from '#lib-shared/billing/resources/Bank/Bank.models';
import type { PaymentMethodTypeModel } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { FIELD_TYPE } from '#lib-shared/form/form.constants';

@withEntity({ isEmbedded: true, isRepository: true, name: BANK_RESOURCE_NAME })
export class Bank extends EmbeddedResource implements BankModel {
  @withField({ isRepository: true, type: FIELD_TYPE.STRING })
  bank!: string;

  @withField({ isRepository: true, type: FIELD_TYPE.STRING })
  id!: string;

  @withField({ isRepository: true, type: FIELD_TYPE.STRING })
  last4!: string;

  @withField({ isOptional: true, type: FIELD_TYPE.STRING })
  type?: PaymentMethodTypeModel;
}
