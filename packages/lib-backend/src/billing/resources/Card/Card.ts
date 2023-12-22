import { EmbeddedResource } from '#lib-backend/resource/resources/EmbeddedResource/EmbeddedResource';
import { withEmbeddableRootField } from '#lib-backend/resource/utils/withEmbeddableRootField/withEmbeddableRootField';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { User } from '#lib-backend/user/resources/User/User';
import { CARD_RESOURCE_NAME } from '#lib-shared/billing/resources/Card/Card.constants';
import {
  type CardBrandModel,
  type CardFundingModel,
  type CardModel,
} from '#lib-shared/billing/resources/Card/Card.models';
import { PAYMENT_METHOD_TYPE } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { DATA_TYPE } from '#lib-shared/data/data.constants';
import { USER_RESOURCE_NAME } from '#lib-shared/user/resources/User/User.constants';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

@withEntity({ isRepository: true, name: CARD_RESOURCE_NAME })
export class Card extends EmbeddedResource implements CardModel {
  @withEmbeddableRootField({ Resource: () => User, name: USER_RESOURCE_NAME })
  [USER_RESOURCE_NAME]!: UserModel;

  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  brand!: CardBrandModel;

  @withField({ isRepository: true, type: DATA_TYPE.NUMBER })
  expMonth!: number;

  @withField({ isRepository: true, type: DATA_TYPE.NUMBER })
  expYear!: number;

  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  funding!: CardFundingModel;

  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  id!: string;

  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  last4!: string;

  @withField({ type: DATA_TYPE.STRING })
  type!: PAYMENT_METHOD_TYPE.CARD;
}
