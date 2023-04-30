import { withEntity } from '@lib/backend/resource/decorators/withEntity/withEntity';
import { withField } from '@lib/backend/resource/decorators/withField/withField';
import { EmbeddedResource } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResource';
import { CARD_RESOURCE_NAME } from '@lib/shared/billing/resources/Card/Card.constants';
import type {
  CardBrandModel,
  CardFundingModel,
  CardModel,
} from '@lib/shared/billing/resources/Card/Card.models';
import type { PaymentMethodTypeModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { FIELD_TYPE } from '@lib/shared/form/form.constants';

@withEntity({ isEmbedded: true, isRepository: true, name: CARD_RESOURCE_NAME })
export class Card extends EmbeddedResource implements CardModel {
  @withField({ isRepository: true, type: FIELD_TYPE.STRING })
  brand!: CardBrandModel;

  @withField({ isRepository: true, type: FIELD_TYPE.NUMBER })
  expMonth!: number;

  @withField({ isRepository: true, type: FIELD_TYPE.NUMBER })
  expYear!: number;

  @withField({ isRepository: true, type: FIELD_TYPE.STRING })
  funding!: CardFundingModel;

  @withField({ isRepository: true, type: FIELD_TYPE.STRING })
  id!: string;

  @withField({ isRepository: true, type: FIELD_TYPE.STRING })
  last4!: string;

  @withField({ isOptional: true, type: FIELD_TYPE.STRING })
  type?: PaymentMethodTypeModel;
}
