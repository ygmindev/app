import { withEntity } from '@lib/backend/resource/decorators/withEntity/withEntity';
import { withField } from '@lib/backend/resource/decorators/withField/withField';
import { EmbeddedResource } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResource';
import { CARD_RESOURCE_NAME } from '@lib/shared/billing/resources/Card/Card.constants';
import type { CardModel, CardTypeModel } from '@lib/shared/billing/resources/Card/Card.models';
import { FIELD_TYPE } from '@lib/shared/form/form.constants';

@withEntity({ isEmbedded: true, isRepository: true, name: CARD_RESOURCE_NAME })
export class Card extends EmbeddedResource implements CardModel {
  @withField({ isRepository: true })
  expMonth!: number;

  @withField({ isRepository: true })
  expYear!: number;

  @withField({ isOptional: true })
  exp?: string;

  @withField({ isRepository: true })
  id!: string;

  @withField({ isRepository: true })
  last4!: number;

  @withField({ isRepository: true })
  name!: string;

  @withField({ isOptional: true, isRepository: true, type: FIELD_TYPE.STRING })
  type?: CardTypeModel;
}
