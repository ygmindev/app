import { type NumberRangeInputModel } from '#lib-backend/form/resources/NumberRangeInput/NumberRangeInput.models';
import { type RelativeDateRangeInputModel } from '#lib-backend/form/resources/RelativeDateRangeInput/RelativeDateRangeInput.models';
import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type FundingModel = EntityResourceModel & {
  amount?: Array<NumberRangeInputModel>;
  currency?: string;
  maturity?: Array<RelativeDateRangeInputModel>;
};

export type FundingFormModel = EntityResourceDataModel<FundingModel>;
