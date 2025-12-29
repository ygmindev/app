import { withDatabaseEntity } from '@lib/backend/resource/utils/withDatabaseEntity/withDatabaseEntity';
import { withDatabaseField } from '@lib/backend/resource/utils/withDatabaseField/withDatabaseField';
import { withManyToManyField } from '@lib/backend/resource/utils/withManyToManyField/withManyToManyField';
import { CARD_FUNDING, CARD_RESOURCE_NAME } from '@lib/model/billing/Card/Card.constants';
import { type CardModel } from '@lib/model/billing/Card/Card.models';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
import { USER_RESOURCE_NAME } from '@lib/model/user/User/User.constants';
import { User } from '@lib/model/user/User/User.entity';
import { type UserModel } from '@lib/model/user/User/User.models';
import { PartialArrayModel } from '@lib/shared/core/core.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withDatabaseEntity({ indices: [{ keys: ['fingerprint'] }], name: CARD_RESOURCE_NAME })
export class Card extends EntityResource implements CardModel {
  @withManyToManyField({ Resource: () => User })
  [USER_RESOURCE_NAME]?: PartialArrayModel<UserModel>;

  @withDatabaseField({ isOptional: true })
  brand?: string;

  @withDatabaseField({ type: DATA_TYPE.NUMBER })
  expMonth!: number;

  @withDatabaseField({ type: DATA_TYPE.NUMBER })
  expYear!: number;

  @withDatabaseField()
  externalId!: string;

  @withDatabaseField()
  fingerprint!: string;

  @withDatabaseField()
  funding!: CARD_FUNDING;

  @withDatabaseField({ isOptional: true, type: DATA_TYPE.BOOLEAN })
  isPrimary?: boolean;

  @withDatabaseField()
  last4!: string;

  @withDatabaseField()
  name?: string;
}

export default Card;
