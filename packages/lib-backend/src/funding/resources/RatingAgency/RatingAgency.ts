import { EntityResource } from '#lib-backend/resource/resources/EntityResource/EntityResource';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { DATA_TYPE } from '#lib-shared/data/data.constants';
import { CREDIT_RATING_CATEGORY } from '#lib-shared/funding/resources/CreditRating/CreditRating.constants';
import { RATING_AGENCY_RESOURCE_NAME } from '#lib-shared/funding/resources/RatingAgency/RatingAgency.constants';
import { type RatingAgencyModel } from '#lib-shared/funding/resources/RatingAgency/RatingAgency.models';

@withEntity({ isRepository: true, name: RATING_AGENCY_RESOURCE_NAME })
export class RatingAgency extends EntityResource implements RatingAgencyModel {
  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  name!: string;
  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  [CREDIT_RATING_CATEGORY.AAA]?: string;
  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  [CREDIT_RATING_CATEGORY.AAp]?: string;
  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  [CREDIT_RATING_CATEGORY.AA]?: string;
  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  [CREDIT_RATING_CATEGORY.AAm]?: string;
  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  [CREDIT_RATING_CATEGORY.Ap]?: string;
  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  [CREDIT_RATING_CATEGORY.A]?: string;
  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  [CREDIT_RATING_CATEGORY.Am]?: string;
  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  [CREDIT_RATING_CATEGORY.BBBp]?: string;
  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  [CREDIT_RATING_CATEGORY.BBB]?: string;
  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  [CREDIT_RATING_CATEGORY.BBBm]?: string;
  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  [CREDIT_RATING_CATEGORY.BBp]?: string;
  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  [CREDIT_RATING_CATEGORY.BB]?: string;
  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  [CREDIT_RATING_CATEGORY.BBm]?: string;
  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  [CREDIT_RATING_CATEGORY.Bp]?: string;
  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  [CREDIT_RATING_CATEGORY.B]?: string;
  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  [CREDIT_RATING_CATEGORY.Bm]?: string;
  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  [CREDIT_RATING_CATEGORY.CCCp]?: string;
  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  [CREDIT_RATING_CATEGORY.CCC]?: string;
  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  [CREDIT_RATING_CATEGORY.CCCm]?: string;
  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  [CREDIT_RATING_CATEGORY.D]?: string;
}
