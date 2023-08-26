import { NumberRange } from '#lib-backend/form/resources/NumberRange/NumberRange';
import { type NumberRangeModel } from '#lib-backend/form/resources/NumberRange/NumberRange.models';
import { RelativeDateRange } from '#lib-backend/form/resources/RelativeDateRange/RelativeDateRange';
import { type RelativeDateRangeModel } from '#lib-backend/form/resources/RelativeDateRange/RelativeDateRange.models';
import { EntityResource } from '#lib-backend/resource/resources/EntityResource/EntityResource';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { FIELD_TYPE } from '#lib-shared/form/form.constants';
import { FUNDING_RESOURCE_NAME } from '#lib-shared/funding/resources/Funding/Funding.constants';
import { type FundingModel } from '#lib-shared/funding/resources/Funding/Funding.models';

@withEntity({ isRepository: true, name: FUNDING_RESOURCE_NAME })
export class Funding extends EntityResource implements FundingModel {
  @withField({ Resource: NumberRange, isArray: true, type: FIELD_TYPE.RESOURCE })
  amount?: Array<NumberRangeModel>;

  @withField({ type: FIELD_TYPE.STRING })
  currency?: string;

  @withField({ Resource: RelativeDateRange, isArray: true, type: FIELD_TYPE.RESOURCE })
  maturity?: Array<RelativeDateRangeModel>;
}
