import { EmbeddedResource } from '#lib-backend/resource/resources/EmbeddedResource/EmbeddedResource';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { DATA_TYPE } from '#lib-shared/data/data.constants';
import { RATING_STEP_RESOURCE_NAME } from '#lib-shared/funding/resources/RatingStep/RatingStep.constants';
import { type RatingStepModel } from '#lib-shared/funding/resources/RatingStep/RatingStep.models';

@withEntity({ isEmbeddable: true, isRepository: true, name: RATING_STEP_RESOURCE_NAME })
export class RatingStep extends EmbeddedResource implements RatingStepModel {
  @withField({ type: DATA_TYPE.STRING })
  name!: string;

  @withField({ type: DATA_TYPE.NUMBER })
  rank!: number;
}
