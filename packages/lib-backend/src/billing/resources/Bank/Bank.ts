import { EmbeddedResource } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResource';
import { type RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { withRefField } from '@lib/backend/resource/utils/withRefField/withRefField';
import { User } from '@lib/backend/user/resources/User/User';
import { BANK_RESOURCE_NAME } from '@lib/shared/billing/resources/Bank/Bank.constants';
import { type BankModel } from '@lib/shared/billing/resources/Bank/Bank.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

@withEntity({ indices: [{ keys: ['fingerprint'] }], isRepository: true, name: BANK_RESOURCE_NAME })
export class Bank extends EmbeddedResource implements BankModel {
  @withRefField({ Resource: () => User })
  [USER_RESOURCE_NAME]!: RefFieldModel<UserModel>;

  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  externalId!: string;

  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  fingerprint?: string;

  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  last4!: string;

  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  name!: string;

  // @withField({ isRepository: true, type: DATA_TYPE.STRING })
  // type!: PAYMENT_METHOD_TYPE.BANK;
}
