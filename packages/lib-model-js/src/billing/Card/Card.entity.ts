import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { withManyToManyField } from '@lib/backend/resource/utils/withManyToManyField/withManyToManyField';
import { CARD_FUNDING, CARD_RESOURCE_NAME } from '@lib/model/billing/Card/Card.constants';
import { type CardModel } from '@lib/model/billing/Card/Card.models';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
import { USER_RESOURCE_NAME } from '@lib/model/user/User/User.constants';
import { User } from '@lib/model/user/User/User.entity';
import { type UserModel } from '@lib/model/user/User/User.models';
import { PartialArrayModel } from '@lib/shared/core/core.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ indices: [{ keys: ['fingerprint'] }], isDatabase: true, name: CARD_RESOURCE_NAME })
export class Card extends EntityResource implements CardModel {
  @withManyToManyField({ Resource: () => User, leaf: CARD_RESOURCE_NAME })
  [USER_RESOURCE_NAME]?: PartialArrayModel<UserModel>;

  @withField({ isDatabase: true, isOptional: true })
  brand?: string;

  @withField({ isDatabase: true, type: DATA_TYPE.NUMBER })
  expMonth!: number;

  @withField({ isDatabase: true, type: DATA_TYPE.NUMBER })
  expYear!: number;

  @withField({ isDatabase: true })
  externalId!: string;

  @withField({ isDatabase: true })
  fingerprint!: string;

  @withField({ isDatabase: true })
  funding!: CARD_FUNDING;

  @withField({ isOptional: true, type: DATA_TYPE.BOOLEAN })
  isPrimary?: boolean;

  @withField({ isDatabase: true })
  last4!: string;

  @withField({ isDatabase: true })
  name?: string;
}

export default Card;
