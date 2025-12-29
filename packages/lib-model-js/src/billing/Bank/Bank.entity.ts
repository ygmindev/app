import { withDatabaseEntity } from '@lib/backend/resource/utils/withDatabaseEntity/withDatabaseEntity';
import { withDatabaseField } from '@lib/backend/resource/utils/withDatabaseField/withDatabaseField';
import { withManyToManyField } from '@lib/backend/resource/utils/withManyToManyField/withManyToManyField';
import { BANK_RESOURCE_NAME } from '@lib/model/billing/Bank/Bank.constants';
import { type BankModel } from '@lib/model/billing/Bank/Bank.models';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
import { USER_RESOURCE_NAME } from '@lib/model/user/User/User.constants';
import { User } from '@lib/model/user/User/User.entity';
import { type UserModel } from '@lib/model/user/User/User.models';
import { PartialArrayModel } from '@lib/shared/core/core.models';

@withDatabaseEntity({ indices: [{ keys: ['fingerprint'] }], name: BANK_RESOURCE_NAME })
export class Bank extends EntityResource implements BankModel {
  @withManyToManyField({ Resource: () => User })
  [USER_RESOURCE_NAME]?: PartialArrayModel<UserModel>;

  @withDatabaseField({ isOptional: true })
  brand?: string;

  @withDatabaseField()
  externalId!: string;

  @withDatabaseField()
  fingerprint!: string;

  @withDatabaseField({ isOptional: true })
  isPrimary?: boolean;

  @withDatabaseField()
  last4!: string;

  @withDatabaseField({ isOptional: true })
  name?: string;
}

export default Bank;
