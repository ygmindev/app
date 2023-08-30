import { EmbeddedResource } from '#lib-backend/resource/resources/EmbeddedResource/EmbeddedResource';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { PROPERTY_TYPE } from '#lib-shared/data/data.constants';
import { CREDIT_RATING_RESOURCE_NAME } from '#lib-shared/funding/resources/CreditRating/CreditRating.constants';
import { type CreditRatingModel } from '#lib-shared/funding/resources/CreditRating/CreditRating.models';

@withEntity({ isEmbedded: true, isRepository: true, name: CREDIT_RATING_RESOURCE_NAME })
export class CreditRating extends EmbeddedResource implements CreditRatingModel {
  @withField({ isRepository: true, type: PROPERTY_TYPE.ID })
  _agency!: string;
}
