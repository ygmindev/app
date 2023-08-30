import { EmbeddedResource } from '#lib-backend/resource/resources/EmbeddedResource/EmbeddedResource';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { CARD_RESOURCE_NAME } from '#lib-shared/billing/resources/Card/Card.constants';
import {
  type CardBrandModel,
  type CardFundingModel,
  type CardModel,
} from '#lib-shared/billing/resources/Card/Card.models';
import { type PaymentMethodTypeModel } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { DATA_TYPE } from '#lib-shared/data/data.constants';

@withEntity({ isEmbedded: true, isRepository: true, name: CARD_RESOURCE_NAME })
export class Card extends EmbeddedResource implements CardModel {
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

  @withField({ isOptional: true, type: DATA_TYPE.STRING })
  type?: PaymentMethodTypeModel;
}
