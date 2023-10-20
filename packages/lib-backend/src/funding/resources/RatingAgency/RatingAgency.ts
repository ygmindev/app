import { RatingStep } from '#lib-backend/funding/resources/RatingStep/RatingStep';
import { EntityResource } from '#lib-backend/resource/resources/EntityResource/EntityResource';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { DATA_TYPE, PROPERTY_TYPE } from '#lib-shared/data/data.constants';
import { RATING_AGENCY_RESOURCE_NAME } from '#lib-shared/funding/resources/RatingAgency/RatingAgency.constants';
import { type RatingAgencyModel } from '#lib-shared/funding/resources/RatingAgency/RatingAgency.models';
import { RATING_STEP_RESOURCE_NAME } from '#lib-shared/funding/resources/RatingStep/RatingStep.constants';
import { type RatingStepModel } from '#lib-shared/funding/resources/RatingStep/RatingStep.models';

@withEntity({ isRepository: true, name: RATING_AGENCY_RESOURCE_NAME })
export class RatingAgency extends EntityResource implements RatingAgencyModel {
  @withField({ Resource: () => RatingStep, isRepository: true, type: PROPERTY_TYPE.RESOURCE })
  [RATING_STEP_RESOURCE_NAME]?: Array<RatingStepModel>;

  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  name!: string;
}
