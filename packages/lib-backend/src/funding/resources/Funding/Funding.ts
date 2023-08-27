import { ScaledNumberRange } from '#lib-backend/form/resources/ScaledNumberRange/ScaledNumberRange';
import { EntityResource } from '#lib-backend/resource/resources/EntityResource/EntityResource';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { FIELD_TYPE } from '#lib-shared/form/form.constants';
import { type ScaledNumberRangeModel } from '#lib-shared/form/resources/ScaledNumberRange/ScaledNumberRange.models';
import { FUNDING_RESOURCE_NAME } from '#lib-shared/funding/resources/Funding/Funding.constants';
import { type FundingModel } from '#lib-shared/funding/resources/Funding/Funding.models';

@withEntity({ isRepository: true, name: FUNDING_RESOURCE_NAME })
export class Funding extends EntityResource implements FundingModel {
  @withField({ Resource: ScaledNumberRange, isArray: true, type: FIELD_TYPE.RESOURCE })
  amount?: Array<ScaledNumberRangeModel>;

  @withField({ type: FIELD_TYPE.STRING })
  currency?: string;

  @withField({ Resource: ScaledNumberRange, isArray: true, type: FIELD_TYPE.RESOURCE })
  maturity?: Array<ScaledNumberRangeModel>;
}
