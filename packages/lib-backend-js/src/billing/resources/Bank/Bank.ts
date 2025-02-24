import { EmbeddedResource } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResource';
import { type RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { withRootField } from '@lib/backend/resource/utils/withRootField/withRootField';
import { User } from '@lib/backend/user/resources/User/User';
import { BANK_RESOURCE_NAME } from '@lib/shared/billing/resources/Bank/Bank.constants';
import { type BankModel } from '@lib/shared/billing/resources/Bank/Bank.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

@withEntity({ indices: [{ keys: ['fingerprint'] }], isDatabase: true, name: BANK_RESOURCE_NAME })
export class Bank extends EmbeddedResource implements BankModel {
  @withRootField({ Resource: () => User, mappedBy: BANK_RESOURCE_NAME })
  [USER_RESOURCE_NAME]!: RefFieldModel<UserModel>;

  @withField({ isDatabase: true, type: DATA_TYPE.STRING })
  externalId!: string;

  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.STRING })
  fingerprint?: string;

  @withField({ isOptional: true, type: DATA_TYPE.BOOLEAN })
  isPrimary?: boolean;

  @withField({ isDatabase: true, type: DATA_TYPE.STRING })
  last4!: string;

  @withField({ isDatabase: true, type: DATA_TYPE.STRING })
  name!: string;
}
