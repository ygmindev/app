import { Collection } from '@lib/backend/core/utils/Collection/Collection';
import { type CollectionModel } from '@lib/backend/core/utils/Collection/Collection.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { withManyToManyField } from '@lib/backend/resource/utils/withManyToManyField/withManyToManyField';
import { CARD_FUNDING, CARD_RESOURCE_NAME } from '@lib/model/billing/Card/Card.constants';
import { type CardModel } from '@lib/model/billing/Card/Card.models';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
import { USER_RESOURCE_NAME } from '@lib/model/user/User/User.constants';
import { User } from '@lib/model/user/User/User.entity';
import { type UserModel } from '@lib/model/user/User/User.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ indices: [{ keys: ['fingerprint'] }], isDatabase: true, name: CARD_RESOURCE_NAME })
export class Card extends EntityResource implements CardModel {
  @withManyToManyField({ Resource: () => User, leaf: CARD_RESOURCE_NAME })
  [USER_RESOURCE_NAME]?: CollectionModel<UserModel> = new Collection(this);

  @withField({ isDatabase: true, type: DATA_TYPE.NUMBER })
  expMonth!: number;

  @withField({ isDatabase: true, type: DATA_TYPE.NUMBER })
  expYear!: number;

  @withField({ isDatabase: true, type: DATA_TYPE.STRING })
  externalId!: string;

  @withField({ isDatabase: true, type: DATA_TYPE.STRING })
  fingerprint!: string;

  @withField({ isDatabase: true, type: DATA_TYPE.STRING })
  funding!: CARD_FUNDING;

  @withField({ isOptional: true, type: DATA_TYPE.BOOLEAN })
  isPrimary?: boolean;

  @withField({ isDatabase: true, type: DATA_TYPE.STRING })
  last4!: string;

  @withField({ isDatabase: true, type: DATA_TYPE.STRING })
  name!: string;
}

export default Card;
