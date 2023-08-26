import { type FormModeModel } from '#lib-shared/form/form.models';
import { type FundingFormModel } from '#lib-shared/funding/resources/Funding/Funding.models';

export type FundingFormPropsModel = {
  mode?: FormModeModel;
};

export type FundingFormStepsModel = [
  Pick<FundingFormModel, 'amount' | 'currency'>,
  Pick<FundingFormModel, 'maturity'>,
];
