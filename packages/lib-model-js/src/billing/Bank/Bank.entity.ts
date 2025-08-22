import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { withManyToManyField } from '@lib/backend/resource/utils/withManyToManyField/withManyToManyField';
import { BANK_RESOURCE_NAME } from '@lib/model/billing/Bank/Bank.constants';
import { type BankModel } from '@lib/model/billing/Bank/Bank.models';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
import { USER_RESOURCE_NAME } from '@lib/model/user/User/User.constants';
import { User } from '@lib/model/user/User/User.entity';
import { type UserModel } from '@lib/model/user/User/User.models';
import { PartialArrayModel } from '@lib/shared/core/core.models';

@withEntity({ indices: [{ keys: ['fingerprint'] }], isDatabase: true, name: BANK_RESOURCE_NAME })
export class Bank extends EntityResource implements BankModel {
  @withManyToManyField({ Resource: () => User, leaf: BANK_RESOURCE_NAME })
  [USER_RESOURCE_NAME]?: PartialArrayModel<UserModel>;

  @withField({ isDatabase: true })
  externalId!: string;

  @withField({ isDatabase: true })
  fingerprint!: string;

  @withField({ isOptional: true })
  isPrimary?: boolean;

  @withField({ isDatabase: true })
  last4!: string;

  @withField({ isDatabase: true })
  name!: string;
}

export default Bank;
