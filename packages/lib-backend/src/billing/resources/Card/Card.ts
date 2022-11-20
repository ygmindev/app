import { withEntity } from '@lib/backend/resource/decorators/withEntity/withEntity';
import { withField } from '@lib/backend/resource/decorators/withField/withField';
import { EmbeddedResource } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResource';
import { CARD_RESOURCE_NAME } from '@lib/shared/billing/resources/Card/Card.constants';
import type { CardModel, CardTypeModel } from '@lib/shared/billing/resources/Card/Card.models';
import { FIELD_TYPE } from '@lib/shared/form/form.constants';

@withEntity({ isEmbedded: true, isRepository: true, name: CARD_RESOURCE_NAME })
export class Card extends EmbeddedResource implements CardModel {
  @withField()
  expMonth!: number;

  @withField()
  expYear!: number;

  @withField()
  id!: string;

  @withField()
  last4!: number;

  @withField()
  name!: string;

  @withField({ isOptional: true, type: FIELD_TYPE.STRING })
  type?: CardTypeModel;
}
