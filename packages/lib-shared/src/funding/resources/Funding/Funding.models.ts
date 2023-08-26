import { type ScaledNumberRangeModel } from '#lib-backend/form/resources/ScaledNumberRange/ScaledNumberRange.models';
import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type FundingModel = EntityResourceModel & {
  amount?: Array<ScaledNumberRangeModel>;
  currency?: string;
  maturity?: Array<ScaledNumberRangeModel>;
};

export type FundingFormModel = EntityResourceDataModel<FundingModel>;
