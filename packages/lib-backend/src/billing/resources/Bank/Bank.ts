import { EmbeddedResource } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResource';
import { withEmbeddableRootField } from '@lib/backend/resource/utils/withEmbeddableRootField/withEmbeddableRootField';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { User } from '@lib/backend/user/resources/User/User';
import { BANK_RESOURCE_NAME } from '@lib/shared/billing/resources/Bank/Bank.constants';
import { type BankModel } from '@lib/shared/billing/resources/Bank/Bank.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { type EmbeddableRootFieldModel } from '@lib/shared/resource/resource.models';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

@withEntity({ indices: [['fingerprint']], isRepository: true, name: BANK_RESOURCE_NAME })
export class Bank extends EmbeddedResource implements BankModel {
  @withEmbeddableRootField({ Resource: () => User })
  [USER_RESOURCE_NAME]!: EmbeddableRootFieldModel<UserModel>;

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
