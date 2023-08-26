import { type EmptyObjectModel } from '#lib-shared/core/core.models';
import { type FundingFormModel } from '#lib-shared/funding/resources/Funding/Funding.models';

export type FundingFormPropsModel = EmptyObjectModel;

export type FundingFormStepsModel = [
  Pick<FundingFormModel, 'amount' | 'currency'>,
  Pick<FundingFormModel, 'maturity'>,
];
