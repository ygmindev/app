import { NumberRangeInput } from '#lib-backend/form/resources/NumberRangeInput/NumberRangeInput';
import { type NumberRangeInputModel } from '#lib-backend/form/resources/NumberRangeInput/NumberRangeInput.models';
import { RelativeDateRangeInput } from '#lib-backend/form/resources/RelativeDateRangeInput/RelativeDateRangeInput';
import { type RelativeDateRangeInputModel } from '#lib-backend/form/resources/RelativeDateRangeInput/RelativeDateRangeInput.models';
import { EntityResource } from '#lib-backend/resource/resources/EntityResource/EntityResource';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { FIELD_TYPE } from '#lib-shared/form/form.constants';
import { FUNDING_RESOURCE_NAME } from '#lib-shared/funding/resources/Funding/Funding.constants';
import { type FundingModel } from '#lib-shared/funding/resources/Funding/Funding.models';

@withEntity({ isRepository: true, name: FUNDING_RESOURCE_NAME })
export class Funding extends EntityResource implements FundingModel {
  @withField({ Resource: NumberRangeInput, isArray: true, type: FIELD_TYPE.RESOURCE })
  amount?: Array<NumberRangeInputModel>;

  @withField({ type: FIELD_TYPE.STRING })
  currency?: string;

  @withField({ Resource: RelativeDateRangeInput, isArray: true, type: FIELD_TYPE.RESOURCE })
  maturity?: Array<RelativeDateRangeInputModel>;
}
