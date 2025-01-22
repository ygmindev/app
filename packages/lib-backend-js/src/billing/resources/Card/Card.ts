import { EmbeddedResource } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResource';
import { type RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { withRefField } from '@lib/backend/resource/utils/withRefField/withRefField';
import { User } from '@lib/backend/user/resources/User/User';
import { CARD_RESOURCE_NAME } from '@lib/shared/billing/resources/Card/Card.constants';
import {
  type CardFundingModel,
  type CardModel,
} from '@lib/shared/billing/resources/Card/Card.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

@withEntity({ indices: [{ keys: ['fingerprint'] }], isDatabase: true, name: CARD_RESOURCE_NAME })
export class Card extends EmbeddedResource implements CardModel {
  @withRefField({ Resource: () => User })
  _user!: RefFieldModel<UserModel>;

  @withField({ isDatabase: true, type: DATA_TYPE.NUMBER })
  expMonth!: number;

  @withField({ isDatabase: true, type: DATA_TYPE.NUMBER })
  expYear!: number;

  @withField({ isDatabase: true, type: DATA_TYPE.STRING })
  externalId!: string;

  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.STRING })
  fingerprint?: string;

  @withField({ isDatabase: true, type: DATA_TYPE.STRING })
  funding!: CardFundingModel;

  @withField({ isOptional: true, type: DATA_TYPE.BOOLEAN })
  isPrimary?: boolean;

  @withField({ isDatabase: true, type: DATA_TYPE.STRING })
  last4!: string;

  @withField({ isDatabase: true, type: DATA_TYPE.STRING })
  name!: string;
}
