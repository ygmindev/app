import { type FormStepPropsModel } from '#lib-frontend/data/components/StepForm/StepForm.models';
import { type FundingFormModel } from '#lib-shared/funding/resources/Funding/Funding.models';

export type FundingMaturityFormModel = Pick<FundingFormModel, 'maturityDays'>;

export type FundingMaturityFormPropsModel = FormStepPropsModel<
  FundingFormModel,
  FundingMaturityFormModel
>;
