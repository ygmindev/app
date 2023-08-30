import { EntityResource } from '#lib-backend/resource/resources/EntityResource/EntityResource';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { DATA_TYPE } from '#lib-shared/data/data.constants';
import { RATING_KEY } from '#lib-shared/funding/funding.constants';
import { RATING_AGENCY_RESOURCE_NAME } from '#lib-shared/funding/resources/RatingAgency/RatingAgency.constants';
import { type RatingAgencyModel } from '#lib-shared/funding/resources/RatingAgency/RatingAgency.models';

@withEntity({ isRepository: true, name: RATING_AGENCY_RESOURCE_NAME })
export class RatingAgency extends EntityResource implements RatingAgencyModel {
  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  name!: string;
  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  [RATING_KEY.AAA]?: string;
  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  [RATING_KEY.AAp]?: string;
  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  [RATING_KEY.AA]?: string;
  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  [RATING_KEY.AAm]?: string;
  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  [RATING_KEY.Ap]?: string;
  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  [RATING_KEY.A]?: string;
  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  [RATING_KEY.Am]?: string;
  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  [RATING_KEY.BBBp]?: string;
  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  [RATING_KEY.BBB]?: string;
  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  [RATING_KEY.BBBm]?: string;
  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  [RATING_KEY.BBp]?: string;
  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  [RATING_KEY.BB]?: string;
  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  [RATING_KEY.BBm]?: string;
  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  [RATING_KEY.Bp]?: string;
  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  [RATING_KEY.B]?: string;
  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  [RATING_KEY.Bm]?: string;
  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  [RATING_KEY.CCCp]?: string;
  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  [RATING_KEY.CCC]?: string;
  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  [RATING_KEY.CCCm]?: string;
  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  [RATING_KEY.D]?: string;
}
