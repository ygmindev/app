import { type FormStepPropsModel } from '#lib-frontend/data/components/StepForm/StepForm.models';
import { type FundingFormModel } from '#lib-shared/funding/resources/Funding/Funding.models';

export type FundingCurrencyFormModel = Pick<FundingFormModel, 'currency'>;

export type FundingCurrencyFormPropsModel = FormStepPropsModel<
  FundingFormModel,
  FundingCurrencyFormModel
>;
