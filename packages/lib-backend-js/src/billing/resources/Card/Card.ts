import { EntityResource } from '@lib/backend/resource/resources/EntityResource/EntityResource';
import { Collection } from '@lib/backend/resource/utils/Collection/Collection';
import { type CollectionModel } from '@lib/backend/resource/utils/Collection/Collection.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { withManyToManyField } from '@lib/backend/resource/utils/withManyToManyField/withManyToManyField';
import { User } from '@lib/backend/user/resources/User/User';
import { CARD_RESOURCE_NAME } from '@lib/shared/billing/resources/Card/Card.constants';
import {
  type CardFundingModel,
  type CardModel,
} from '@lib/shared/billing/resources/Card/Card.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

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
  funding!: CardFundingModel;

  @withField({ isOptional: true, type: DATA_TYPE.BOOLEAN })
  isPrimary?: boolean;

  @withField({ isDatabase: true, type: DATA_TYPE.STRING })
  last4!: string;

  @withField({ isDatabase: true, type: DATA_TYPE.STRING })
  name!: string;
}
