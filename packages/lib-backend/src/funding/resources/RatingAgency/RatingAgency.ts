import { EntityResource } from '#lib-backend/resource/resources/EntityResource/EntityResource';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { DATA_TYPE } from '#lib-shared/data/data.constants';
import { RATING_AGENCY_RESOURCE_NAME } from '#lib-shared/funding/resources/RatingAgency/RatingAgency.constants';
import { type RatingAgencyModel } from '#lib-shared/funding/resources/RatingAgency/RatingAgency.models';

@withEntity({ isRepository: true, name: RATING_AGENCY_RESOURCE_NAME })
export class RatingAgency extends EntityResource implements RatingAgencyModel {
  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  name!: string;

  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  logo?: string;
}
