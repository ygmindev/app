import { withEntity } from '@lib/backend/resource/decorators/withEntity/withEntity';
import { withField } from '@lib/backend/resource/decorators/withField/withField';
import { EmbeddedResource } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResource';
import { BANK_RESOURCE_NAME } from '@lib/shared/billing/resources/Bank/Bank.constants';
import type { BankModel } from '@lib/shared/billing/resources/Bank/Bank.models';

@withEntity({ isEmbedded: true, isRepository: true, name: BANK_RESOURCE_NAME })
export class Bank extends EmbeddedResource implements BankModel {
  @withField({ isRepository: true })
  id!: string;
}
