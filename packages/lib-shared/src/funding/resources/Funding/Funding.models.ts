import { type NumberRangeModel } from '#lib-backend/form/resources/NumberRange/NumberRange.models';
import { type RelativeDateRangeModel } from '#lib-backend/form/resources/RelativeDateRange/RelativeDateRange.models';
import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type FundingModel = EntityResourceModel & {
  amount?: Array<NumberRangeModel>;
  currency?: string;
  maturity?: Array<RelativeDateRangeModel>;
};

export type FundingFormModel = EntityResourceDataModel<FundingModel>;
